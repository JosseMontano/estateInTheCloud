import { NextFunction, Request, Response } from "express";
import { z } from "zod";
const pool = require("../db");

const QuestionSchema = z.object({
  question: z.string().nonempty(),
});

export const getAllAnswer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allEstate = await pool.query(
      ` select id, answer from answers
        `
    );
    res.json(allEstate.rows);
  } catch (error: any) {
    next(error);
  }
};

export const createAnswer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { question } = req.body;
  try {
    QuestionSchema.parse(req.body);
    await pool.query(
      "insert into answers (answer) values ($1) returning *",
      [question]
    );
    res.json({ action: true });
  } catch (error: any) {
    next(error);
  }
};

export const deleteAnswer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const question = await pool.query("delete from answers where id=$1", [
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
