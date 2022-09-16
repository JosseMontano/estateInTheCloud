import { NextFunction, Request, Response } from "express";
import { uploadImage, deleteImage } from "../libs/cloudinary";
import { UploadedFile } from "express-fileupload";
import fs from "fs-extra";

const pool = require("../db");

const getAllEstates = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allEstate = await pool.query(
      `
      select DISTINCT on (re.id) re.id as idRealEstate, rp.id as idRealEstatePhoto,p.id as idPhoto,  p.url, 
      p.public_id, re.title, re.description, u.email
      from real_estates_photos rp , photos p, real_estates re, users u 
      where rp.id_photo = p.id and rp.id_real_estate = re.id and re.id_user = u.id
      ORDER BY re.id
      `
    );
    res.json(allEstate.rows);
  } catch (error: any) {
    next(error);
  }
};

const getEstateByUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      `
    select DISTINCT on (re.id) re.id as idRealEstate, rp.id as idRealEstatePhoto,p.id as idPhoto,  p.url, 
    p.public_id, re.title, re.description, u.email
    from real_estates_photos rp , photos p, real_estates re, users u 
    where rp.id_photo = p.id and rp.id_real_estate = re.id and re.id_user = u.id and re.id_user=${id}
    ORDER BY re.id
      `
    );

    if (result.rows.length === 0)
      return res.status(404).json({
        message: "Not found",
      });
    res.json(result.rows);
    //res.json(result.rows);
  } catch (error: any) {
    next(error);
  }
};

const getEstateOfOnePublication = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { idRealEstate } = req.params;
    const result = await pool.query(
      `
      select re.id as idRealEstate, rp.id as idRealEstatePhoto,p.id as idPhoto,  p.url, 
      p.public_id, re.title, re.description, u.email
      from real_estates_photos rp , photos p, real_estates re, users u 
      where rp.id_photo = p.id and rp.id_real_estate = re.id and re.id_user = u.id
      and re.id = ${idRealEstate}
      `
    );

    if (result.rows.length === 0)
      return res.status(404).json({
        message: "Not found",
      });
    res.json(result.rows);
    //res.json(result.rows);
  } catch (error: any) {
    next(error);
  }
};

const createEstate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, description, id_user } = req.body;
  try {
    //save data of the realEstate
    const result = await pool.query(
      "insert into real_estates (title, description, id_user) values ($1, $2, $3) returning *",
      [title, description, id_user]
    );
    const id_real_estate = result.rows[0].id;

    //save first photo
    let f = req.files?.url as UploadedFile;
    if (f) {
      const resUpload = await uploadImage(f.tempFilePath);
      const resPhoto = await pool.query(
        "insert into photos (url, public_id) values ($1, $2) returning *",
        [resUpload.secure_url, resUpload.public_id]
      );
      await fs.remove(f.tempFilePath);
      const idPhoto = resPhoto.rows[0].id;

      //save in table relational
      const resTableRelational = await pool.query(
        "insert into real_estates_photos (id_photo, id_real_estate) values ($1, $2) returning *",
        [idPhoto, id_real_estate]
      );
      res.json(resTableRelational.rows[0]);
    }

    res.json(result.rows[0]);
  } catch (error: any) {
    next(error);
    //es better send a 500
  }
};

const addNewPhotoToRealEstate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id_real_estate } = req.params;
    //save first photo
    let f = req.files?.url as UploadedFile;
    if (f) {
      const resUpload = await uploadImage(f.tempFilePath);
      const resPhoto = await pool.query(
        "insert into photos (url, public_id) values ($1, $2) returning *",
        [resUpload.secure_url, resUpload.public_id]
      );
      await fs.remove(f.tempFilePath);
      const idPhoto = resPhoto.rows[0].id;

      //save in table relational
      const resTableRelational = await pool.query(
        "insert into real_estates_photos (id_photo, id_real_estate) values ($1, $2) returning *",
        [idPhoto, id_real_estate]
      );
      return res.json({ action: true });
    }
    return res.json({ action: false });
  } catch (error: any) {
    next(error);
  }
};
const deleteEstate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { idRealEstatePhoto } = req.params;
    const { idPhoto } = req.params;
    const { idRealEstate } = req.params;
    //delete img from cloudinary
    const getId = await pool.query("select * from photos where id = $1", [
      idPhoto,
    ]);
    await deleteImage(getId.rows[0].public_id);

    //delete data relational
    const resultRealEstates = await pool.query(
      "delete from real_estates_photos where id = $1",
      [idRealEstatePhoto]
    );

    //delete data photos
    const resPhoto = await pool.query("delete from photos where id = $1", [
      idPhoto,
    ]);

    //delete data real Estates
    const resRealEstate = await pool.query(
      "delete from real_estates where id=$1",
      [idRealEstate]
    );
    if (resRealEstate.rowCount === 0)
      return res.status(404).json({
        message: "Not found",
      });
    return res.json({ action: true });
  } catch (error: any) {
    next(error);
  }
};

const updateEstate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { title, description, id_user } = req.body;
    const result = await pool.query(
      "update real_estates set title=$1, description=$2, id_user=$3 where id=$3 returning *",
      [title, description, id_user, id]
    );
    if (result.rows.length === 0)
      return res.status(404).json({
        message: "Not found",
      });
    /*  console.log(result) */
    return res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllEstates,
  getEstateByUser,
  getEstateOfOnePublication,
  createEstate,
  deleteEstate,
  updateEstate,
  addNewPhotoToRealEstate,
};
