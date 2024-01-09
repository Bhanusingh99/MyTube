import { Router } from "express";
import { registerUser } from "../controllers/register.contollers.js";

const router = Router();
router.route("/register").post(registerUser);

export {router};