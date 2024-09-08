import multer from "multer";
import express from "express";
import { jwtCheck, jwtparse } from "../middleware/auth";
import MyRestaurantController from "../controllers/MyRestaurantController";
import { validateMyRestaurantRequest } from "../middleware/validation";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, //5mb
  },
});

router.post(
  "/",
  upload.single("imageFile"),
  validateMyRestaurantRequest,
  jwtCheck,
  jwtparse,
  MyRestaurantController.createMyRestaurant
);

router.get("/", jwtCheck, jwtparse, MyRestaurantController.getMyRestaurant);

router.put(
  "/",
  upload.single("imageFile"),
  validateMyRestaurantRequest,
  jwtCheck,
  jwtparse,
  MyRestaurantController.updateMyRestaurant
);

export default router;
