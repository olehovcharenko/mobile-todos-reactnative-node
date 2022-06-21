import { Request, Response, NextFunction } from "express";
import User from "./../models/User";
import ErrorHandler from "../helper/errorHelper";

const isUserExist = async (req: Request, res: Response, next: NextFunction) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    res.locals.user = user;
    next();
  } else {
    next(ErrorHandler.BadRequest("User with this email was not found"));
  }
};
export default isUserExist;