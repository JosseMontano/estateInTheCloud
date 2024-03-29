import { NextFunction, Request, Response } from "express";
import { uploadImage, deleteImage } from "../libs/cloudinary";
import { UploadedFile } from "express-fileupload";
import fs from "fs-extra";
import { transporter } from "../libs/mailer";
const { passwordEncrypt } = require("../utilities/encrypt");

const { emailer } = require("../config");
const pool = require("../db");

export const updatePhotoUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.params;
    let f1 = req.files?.url as UploadedFile;
    if (!f1) {
      return res.status(400).json({
        message: "photo no send",
      });
    }
    //get the row of user
    const rowUser = await pool.query("select * from users where email = $1", [
      email,
    ]);
    const idPhoto = rowUser.rows[0].id_photo;
    const idUser = rowUser.rows[0].id;
    if (idPhoto != null) {
      //delete img from cloudinary
      const getId = await pool.query("select * from photos where id = $1", [
        idPhoto,
      ]);
      await deleteImage(getId.rows[0].public_id);

      // save the new photo
      if (f1) {
        const resUpload = await uploadImage(f1.tempFilePath);
        const resPhoto = await pool.query(
          "insert into photos (url, public_id) values ($1, $2) returning *",
          [resUpload.secure_url, resUpload.public_id]
        );
        await fs.remove(f1.tempFilePath);
        const idPhoto = resPhoto.rows[0].id;
        //save in table user the id photo
        const resTableRelational = await pool.query(
          "update users set id_photo = $1 where id=$2 returning *",
          [idPhoto, idUser]
        );

        if (resTableRelational.rows.length === 0) {
          return res.status(400).json({
            message: "Not found",
          });
        }
      }

      //delete data photos old
      const deletePhotoOfTable = await pool.query(
        "delete from photos where id = $1",
        [idPhoto]
      );
      if (deletePhotoOfTable.rowCount === 0)
        return res.status(400).json({
          message: "Data Not found",
        });

      return res.status(200).json({
        operation: true,
      });
    }

    //the user haven't photo so... save the photo
    let f = req.files?.url as UploadedFile;
    if (f) {
      const resUpload = await uploadImage(f.tempFilePath);
      const resPhoto = await pool.query(
        "insert into photos (url, public_id) values ($1, $2) returning *",
        [resUpload.secure_url, resUpload.public_id]
      );
      await fs.remove(f.tempFilePath);
      const idPhoto = resPhoto.rows[0].id;
      //save in table user the id photo
      const resTableRelational = await pool.query(
        "update users set id_photo = $1 where id=$2 returning *",
        [idPhoto, idUser]
      );

      if (resTableRelational.rows.length === 0) {
        return res.status(400).json({
          message: "Not found",
        });
      }

      return res.status(200).json(resTableRelational.rows[0]);
    }
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      `
      select u.email, u.id as id_usuario, u.url_photo as url from users u 
      where u.id = $1
        `,
      [id]
    );
    if (result.rows.length === 0)
      return res.status(400).json({
        message: "Data not found",
      });
    res.status(200).json(result.rows);
    //res.json(result.rows);
  } catch (error: any) {
    next(error);
  }
};

export const sendEmailCode = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.params;
  try {
    //search user in database
    const resultUser = await pool.query(
      "select id from users where email = $1",
      [email]
    );
    if (resultUser.rows.length === 0) {
      return res.status(401).json({
        message: "the email doesnt exists",
      });
    }
    //save code in database
    const idUser = resultUser.rows[0].id;
    const resulAccountCode = await pool.query(
      "select id from accounts where user_id = $1",
      [idUser]
    );
    const secrect_password = Math.floor(Math.random() * 90000) + 10000;
    if (resultUser.rows.length === 0) {
      await pool.query(
        "insert into accounts (secret_password, id_user) values ($1, $2) returning *",
        [secrect_password, idUser]
      );
    } else {
      await pool.query(
        "update accounts set secret_password = $1 where id_user=$2 returning *",
        [secrect_password, idUser]
      );
    }

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"Forgot password 👻" ${emailer.user}`, // sender address
      to: email, // list of receivers
      subject: "Fogot Password", // Subject line
      html: `
      <p>Utiliza el siguiente codigo para cambiar la contraseña, la proxima trata de no olvidarla</p>
      <center><h2>${secrect_password}</h2></center>
      `, // html body
    });
    if (info.messageId) {
      return res.status(200).json({
        operation: true,
      });
    }
    return res.status(500);
  } catch (error) {
    next(error);
  }
};

export const changePassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password, codeEmail } = req.body;
    const userQuery = await pool.query(
      "select id from users where email = $1",
      [email]
    );
    if (userQuery.rows.length === 0) {
      return res.status(404).json({
        message: "the email doesnt exists",
      });
    }
    const idUser = userQuery.rows[0].id;
    const searchCodeEmail = await pool.query(
      "select id from accounts where id_user = $1 and secret_password = $2",
      [idUser, codeEmail]
    );

    if (searchCodeEmail.rows.length === 0) {
      return res.status(404).json({
        message: "the code it's incorrect",
      });
    }
    const pass = await passwordEncrypt(password);
    await pool.query("update users set password = $1 where id=$2 returning *", [
      pass,
      idUser,
    ]);
    return res.status(200).json({
      operation: true,
    });
  } catch (error) {
    next(error);
  }
};
