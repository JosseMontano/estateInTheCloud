import Router from "express";

const router = Router();

import {createAnswer, getAllAnswer, deleteAnswer} from '../controllers/answers.controller'

router.get("/answer", getAllAnswer);
router.post("/answer", createAnswer);
router.delete("/answer/:id", deleteAnswer);


module.exports = router;
