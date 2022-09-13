import { NextFunction, Request, Response } from "express";

const pool = require("../db");

const getAllEstates = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allEstate = await pool.query("select * from real_estates");
    res.json(allEstate.rows);
  } catch (error: any) {
    next(error);
  }
};

const getEstate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await pool.query("select * from real_estates where id = $1", [id]);
    if (result.rows.length === 0)
      return res.status(404).json({
        message: "Not found",
      });
    res.json(result.rows[0]);
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
    const result = await pool.query(
      "insert into real_estates (title, description, id_user) values ($1, $2, $3) returning *",
      [title, description, id_user]
    );
    res.json(result.rows[0]);
  } catch (error: any) {
    next(error);
    //es better send a 500
  }
};
const deleteEstate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const result = await pool.query("delete from real_estates where id = $1", [id]);
    if (result.rowCount === 0)
      return res.status(404).json({
        message: "Not found",
      });
    return res.sendStatus(204);
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
  getEstate,
  createEstate,
  deleteEstate,
  updateEstate,
};
