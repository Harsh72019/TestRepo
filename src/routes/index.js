import postRoute from "./post.route.js"
import tagRoute from "./tag.route.js";

import express from "express";


const router = express.Router();

router.use("/posts", postRoute);
router.use("/tags", tagRoute);


export default router;