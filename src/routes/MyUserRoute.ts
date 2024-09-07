import express from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtparse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";

const router = express.Router();

// /api/my/user
router.get("/", jwtCheck, jwtparse, MyUserController.getCurrentUser);
router.post("/", jwtCheck, MyUserController.createCurrentUser);
router.put(
  "/",
  jwtCheck,
  jwtparse,
  validateMyUserRequest,
  MyUserController.updateCurrentUser
);

export default router;