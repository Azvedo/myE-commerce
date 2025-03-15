import express from "express";
import {login} from "../controllers/authController.js";

const authrouter = express.Router();

authrouter.post("/login", login);

export default authrouter;