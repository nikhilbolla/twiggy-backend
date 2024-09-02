import express from "express";
import { jwtCheck, jwtparse } from "../middleware/auth";
import { createCurrentUser, getCurrentUser, updateCurrentUser } from "../controllers/MyUserController";
import { validateMyUserRequest } from "../middleware/validation";

const router = express.Router();

router.route("/").post(jwtCheck,createCurrentUser)
router.route("/").put(jwtCheck, jwtparse, validateMyUserRequest, updateCurrentUser)
router.route("/").get(jwtCheck, jwtparse, getCurrentUser)

module.exports = router