import { NextFunction, Request, Response } from "express";
import UserService from "../services/auth.service";
import { User } from "user.type";

export class UserController {
  constructor(private userService: UserService) {
  }

  async registerUser(req: Request<{}, {}, User>, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    const token = await this.userService.registration(email, password);
    token ? res.status(200).json(token) : next();
  }

  async loginUser(req: Request<{}, {}, User>, res: Response, next: NextFunction) {
    const { password } = req.body;
    const user = await this.userService.login(password, res.locals.user);
    user ? res.status(200).json(user) : next();
  }

  async logoutUser(_: Request, res: Response, next: NextFunction) {
    res.status(200).json({ success: true });
    next();
  }
}

const userController = new UserController(new UserService());
export default userController;