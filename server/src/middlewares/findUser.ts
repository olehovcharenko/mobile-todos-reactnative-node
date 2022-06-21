import User from "../models/User";
import errorHelper from "../helper/errorHelper";
import { NextFunction, Request, Response } from "express";

const findUser = async (_: Request, res: Response, next: NextFunction) => {
    const user = await User.findOne({ _id: res.locals.user.id });
    if (user) {
      next();
    } else {
      next(errorHelper.BadRequest("User with this id was not found"));
    }
  };
  export default findUser;