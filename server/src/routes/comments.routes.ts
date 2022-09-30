import Router from "express";

const router = Router();

import {getAllCommentsByUser, createComment} from '../controllers/comments.controller'

router.get("/comment/:person_commented", getAllCommentsByUser);
/*router.get("/estate/:id", getEstateByUser);
router.get("/estateOfOnePublication/:idRealEstate", getEstateOfOnePublication); */
router.post("/comment", createComment);
/* router.post("/addPhotoToRealEstate/:id_real_estate", addNewPhotoToRealEstate);
router.put("/estate/:id", updateEstate);
router.delete("/estate/:idRealEstatePhoto/:idPhoto/:idRealEstate", deleteEstate); */

module.exports = router;
