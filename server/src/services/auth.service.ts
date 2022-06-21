import User from "../models/User";
import errorHelper from "../helper/errorHelper";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "config";
import { ExistUser } from "./../types/user.type";

export default class AuthService {
  async registration(email: string, password: string) {
    const user = await User.findOne({ email: email });
    if (!user) {
      const cryptoPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
      const userData = await User.create({
        email: email,
        password: cryptoPassword,
      });
      return {
        authToken: jwt.sign({
          email: userData.email,
          id: userData._id,
        }, config.get("jwtSecret"), { expiresIn: config.get("jwtExpiration") }),
        authorId: userData._id,
      };
    } else {
      throw errorHelper.BadRequest("User with this login already exist");
    }
  }

  async login(password: string, user: ExistUser) {
    const passwordSync = bcrypt.compareSync(password, user.password);
    if (passwordSync) {
      return {
        authToken: jwt.sign({
          email: user.email,
          id: user._id,
        }, config.get("jwtSecret"), { expiresIn: config.get("jwtExpiration") }),
        userId: user._id,
      };
      } else {
        throw errorHelper.BadRequest("Wrong login or password");
    }
  }
}