import express from "express";
import dataRequest from "../Controllers/request-controller.js";
const router = express.Router();

//Get Request Router:
router.get("/", dataRequest);

export default router;
