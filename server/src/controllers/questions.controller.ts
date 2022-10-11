import { NextFunction, Request, Response } from "express";
const pool = require("../db");
export const getAllquestions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allEstate = await pool.query(
      ` select id, question from questions
        `
    );
    res.json(allEstate.rows);
  } catch (error: any) {
    next(error);
  }
};
export const createQuestion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { question } = req.body;
  try {
    //save data of the realEstate
    const result = await pool.query(
      "insert into questions (question) values ($1) returning *",
      [question]
    );
    res.json({ action: true });
  } catch (error: any) {
    next(error);
  }
};

export const deleteQuestion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const question = await pool.query("delete from questions where id=$1", [
      id,
    ]);
    if (question.rowCount === 0)
      return res.status(404).json({
        message: "Not found",
      });
    return res.json({ action: true });
  } catch (error: any) {
    next(error);
  }
};
