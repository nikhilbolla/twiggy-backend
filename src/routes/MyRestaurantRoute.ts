import express from "express";
import multer from "multer";
import MyRestaurantController from "../controllers/MyRestaurantController";
import { jwtCheck, jwtparse } from "../middleware/auth";
import { validateMyRestaurantRequest } from "../middleware/validation";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, //5mb
  },
});

router.get(
  "/order",
  jwtCheck,
  jwtparse,
  MyRestaurantController.getMyRestaurantOrders
);

router.patch(
  "/order/:orderId/status",
  jwtCheck,
  jwtparse,
  MyRestaurantController.updateOrderStatus
);

router.get("/", jwtCheck, jwtparse, MyRestaurantController.getMyRestaurant);

router.post(
  "/",
  upload.single("imageFile"),
  validateMyRestaurantRequest,
  jwtCheck,
  jwtparse,
  MyRestaurantController.createMyRestaurant
);

router.put(
  "/",
  upload.single("imageFile"),
  validateMyRestaurantRequest,
  jwtCheck,
  jwtparse,
  MyRestaurantController.updateMyRestaurant
);

export default router;