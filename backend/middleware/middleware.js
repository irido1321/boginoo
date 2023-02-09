import jwt from "jsonwebtoken";
import User from "../model/User.js";
export const checkTokenMiddleWare = (req, res, next) => {
  const token = req.body.token;
  // localStorage.getItem("token", token);
  jwt.verify(token, "secret", (err, result) => {
    if (err) {
      res.status(403).send(err);
    }
    console.log(result, "ahah");
    return next();
  });
};
export const checkAdminMidlleWare = async (req, res, next) => {
  try {
    const role = req.body.role;
    jwt.verify(role, "secret", (err, result) => {
      if (role == "admin") {
        return next();
      } else {
        res.status(400).send({
          error: err.message,
        });
      }
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
