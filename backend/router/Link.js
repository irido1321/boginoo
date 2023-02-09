import express from "express";
import {
  getAlllinks,
  createlink,
  deletelink,
  findlink,
} from "../controller/link.js";
import Link from "../model/link.js";
import { paginationFunction } from "../pagination/pagination.js";
const router = express.Router();

router.route("/").get(paginationFunction(Link), getAlllinks).post(createlink);
router.route("/:id").delete(deletelink);
router.route("/:params").get(findlink);

export default router;
