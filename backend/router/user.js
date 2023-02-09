import express from "express";
import {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  removeUser,
  getUserByObject,
} from "../controller/user.js";
import { checkTokenMiddleWare } from "../middleware/middleware.js";
import { checkAdminMidlleWare } from "../middleware/middleware.js";
const router = express.Router();

router.route("/").all(checkTokenMiddleWare).get(getAllUsers);
router.route("/:id").get(getUser).put(updateUser);
router.route("/login").post(getUserByObject);
router.route("/signup").post(createUser);
router.route("/:id").all(checkAdminMidlleWare).delete(removeUser);

export default router;
