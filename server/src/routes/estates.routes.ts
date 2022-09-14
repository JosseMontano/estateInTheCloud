const { Router } = require("express");

const router = Router();
const {
  getAllEstates,
  getEstateByUser,
  createEstate,
  deleteEstate,
  updateEstate,
} = require("../controllers/estates.controller");

router.get("/estate", getAllEstates);
router.get("/estate/:id", getEstateByUser);
router.post("/estate", createEstate);
router.put("/estate/:id", updateEstate);
router.delete("/estate/:idRealEstatePhoto/:idPhoto/:idRealEstate", deleteEstate);

module.exports = router;
