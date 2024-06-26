import { NextFunction, Request, Response } from "express";
import { uploadImage, deleteImage } from "../libs/cloudinary";
import { UploadedFile } from "express-fileupload";
import fs from "fs-extra";
import RealEstateType from "../interfaces/realEstate";
import { LocationRes, PropertiesPlacesMaps } from "../interfaces/infoMaps";
import { translateToSpanish } from "../utilities/translate";
const { googleMaps } = require("../config");
const pool = require("../db");

const queryRealEstate = `
  select DISTINCT on (re.id) re.id as idRealEstate, rp.id as idRealEstatePhoto,p.id as idPhoto,  p.url, 
  p.public_id, re.title, re.description, u.email, u.id as idUser
  from real_estates_photos rp , photos p, real_estates re, users u 
  where rp.id_photo = p.id and rp.id_real_estate = re.id and re.user_id = u.id and re.available=true
  ORDER BY re.id`;

export const getAllEstates = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allEstate = await pool.query(`${queryRealEstate}`);
    res.json(allEstate.rows);
  } catch (error: any) {
    next(error);
  }
};

export const getPlaces = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let radius = 1 * 1000;

  const { lat, long } = req.body;
  //-17.37140523445971  -66.17990255355836
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=${radius}&key=${googleMaps.key}`;

  try {
    const response = await fetch(url);
    const { results } = await response.json();
    const resultsData = results as PropertiesPlacesMaps[];

    //save only the location, name and types
    let data: LocationRes[] = resultsData.map((v) => {
      return {
        location: v.geometry.location,
        name: v.name,
        types: v.types,
      };
    })


    let newDataSpanish = [] as LocationRes[];
    for (let i = 0; i < data.length; i++) {
        try {
          const res = await translateToSpanish(data[i].types[0]);
          newDataSpanish.push({ location: data[i].location, name: data[i].name, types: [res] });
        } catch (error) {
          console.error(`Error translating item at index ${i}:`, error);
        }
      

    }
    console.log(newDataSpanish);
    res.json(newDataSpanish);
  } catch (error) {
    next(error);
  }
};

export const getRealEstatesMostRecent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allEstate = await pool.query(`${queryRealEstate} desc limit 8`);
    if (allEstate.rows.length === 0) {
      return res.status(404).json({
        message: "Data not found",
      });
    }

    res.json(allEstate.rows);
  } catch (error: any) {
    next(error);
  }
};
/**
 * TODO:Refactor this function
 */
export const getRealEstatesByUSerRecommended = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allEstate = await pool.query(
      `
      SELECT * 
      FROM(SELECT DISTINCT on (u.email) re.id as idRealEstate, rp.id as idRealEstatePhoto,
          p.id as idPhoto,  p.url, 
           p.public_id, re.title, re.description, u.email, u.id as idUser, u.qualification
           from real_estates_photos rp , photos p, real_estates re, users u  
           where rp.id_photo = p.id and rp.id_real_estate = re.id and re.user_id = u.id and re.available=true
           ORDER BY u.email DESC) users ORDER BY users.qualification desc;
      `
    );
    if (allEstate.rows.length === 0) {
      return res.status(404).json({
        message: "Data not found",
      });
    }
    res.json(allEstate.rows);
  } catch (error: any) {
    next(error);
  }
};

export const getEstateByUser = async (
  idUser: number
): Promise<RealEstateType[]> => {
  const result = await pool.query(
    `
    select DISTINCT on (re.id) re.id as id_real_estate, rp.id as id_real_estate_photo,p.id as id_photo,
    p.url,
    p.public_id, re.title, re.description, u.email, re.available, u.cellphone_number, u.id as id_user,
    re.amount_bedroom, re.price, re.amount_bathroom, re.square_meter, re.lat_long, re.address
	  from real_estates_photos rp , photos p, real_estates re, users u 
    where rp.photo_ID = p.id and rp.real_estate_id = re.id and re.user_id = u.id and 
    re.user_id=${idUser}
    ORDER BY re.id
      `
  );

  if (result.rows.length === 0) return [];

  return result.rows;
};

export const getEstateOfOnePublication = async (
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
      where rp.id_photo = p.id and rp.id_real_estate = re.id and re.user_id = u.id
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

export const createEstate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  /* const {
    title,
    description,
    id_user,
    id_type,
    bedroom,
    price,
    bathroom,
    squareMeter,
  } = req.body; */

  const { realEstateId } = req.body;

  try {
    //save data of the realEstate
    /*  const result = await pool.query(
      `insert into real_estates (title, description, user_id, type_real_estate_id, 
        available,amount_bedroom,price,amount_bathroom,square_meter) 
      values ($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *`,
      [
        title,
        description,
        id_user,
        id_type,
        1,
        bedroom,
        price,
        bathroom,
        squareMeter,
      ]
    );
    const id_real_estate = result.rows[0].id; */

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
        "insert into real_estates_photos (photo_id, real_estate_id) values ($1, $2) returning *",
        [idPhoto, realEstateId]
      );
      res.json(resTableRelational.rows[0]);
    }

    res.json(realEstateId);
  } catch (error: any) {
    next(error);
  }
};

export const addNewPhotoToRealEstate = async (
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
        "insert into real_estates_photos (photo_id, real_estate_id) values ($1, $2) returning *",
        [idPhoto, id_real_estate]
      );
      return res.json({ action: true });
    }
    return res.json({ action: false });
  } catch (error: any) {
    next(error);
  }
};

export const deleteEstate = async (
  idRealEstatePhoto: number,
  idPhoto: number,
  idRealEstate: number
) => {
  //delete img from cloudinary
  const getId = await pool.query("select * from photos where id = $1", [
    idPhoto,
  ]);
  await deleteImage(getId.rows[0].public_id);

  //delete data relational
  await pool.query("delete from real_estates_photos where id = $1", [
    idRealEstatePhoto,
  ]);

  //delete data photos
  await pool.query("delete from photos where id = $1", [idPhoto]);

  //delete data real Estates
  const resRealEstate = await pool.query(
    "delete from real_estates where id=$1",
    [idRealEstate]
  );
  if (resRealEstate.rowCount === 0) return false;
  return true;
};

export const updateEstate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { title, description, id_user } = req.body;
    const result = await pool.query(
      "update real_estates set title=$1, description=$2, user_id=$3 where id=$3 returning *",
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

export const updateStateAvailable = async (
  idRealEstate: number,
  available: boolean
) => {
  const result = await pool.query(
    "update real_estates set available=$1 where id=$2 returning *",
    [available, idRealEstate]
  );
  if (result.rows.length === 0) return false;
  return true;
};

export const getTypeRealEstat = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allComments = await pool.query(
      `select * from type_real_estates
      `
    );
    res.json(allComments.rows);
  } catch (error: any) {
    next(error);
  }
};

export const getAllEstatesByType = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { type } = req.params;
    const allEstate = await pool.query(
      `
      select DISTINCT on (re.id) re.id as id_real_estate, rp.id as id_real_estate_photo,p.id as id_photo,  p.url, 
      p.public_id, re.title, re.description, u.email, u.id as id_user
      from real_estates_photos rp , photos p, real_estates re, users u, type_real_estates tre
      where rp.photo_id = p.id and rp.real_estate_id = re.id and re.user_id = u.id and re.available=true and
      re.type_real_estate_id = tre.id and tre.name =$1
      ORDER BY re.id`,
      [type]
    );
    res.json(allEstate.rows);
  } catch (error: any) {
    next(error);
  }
};

export const getAllEstatesByFilterCustom = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      type,
      amountBathroom,
      amountBedroom,
      minPrice,
      maxPrice,
      minSquareMeter,
      maxSquareMeter,
    } = req.body;
    console.log(req.body);
    const allEstate = await pool.query(
      `
      select DISTINCT on (re.id) re.id as idRealEstate, rp.id as idRealEstatePhoto,p.id as idPhoto,  p.url, 
      p.public_id, re.title, re.description, re.amount_bathroom, re.amount_bedroom, 
	  re.price, square_meter,
	  u.email, u.id as idUser, tre.name_type
      from real_estates_photos rp , photos p, real_estates re, users u, type_real_estates tre
      where rp.photo_id = p.id and rp.real_estate_id = re.id and re.user_id = u.id
      and re.available=true and
        re.type_real_estate_id = tre.id and tre.name_type =$1
	  and re.amount_bathroom = $2 and re.amount_bedroom =$3 and re.price>=$4 and re.price<=$5
     and re.square_meter>=$6 and re.square_meter<=$7
      ORDER BY re.id`,
      [
        type,
        amountBathroom,
        amountBedroom,
        minPrice,
        maxPrice,
        minSquareMeter,
        maxSquareMeter,
      ]
    );
    res.json(allEstate.rows);
  } catch (error: any) {
    next(error);
  }
};
