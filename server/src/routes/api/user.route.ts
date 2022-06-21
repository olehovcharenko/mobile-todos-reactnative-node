import User from "../../models/User";
import { joiUser } from "./../../models/User";
import { Router } from "express";
import authController from "../../controllers/auth.controller";
import joiValid from "./../../middlewares/joi";
import isUserExist from "../../middlewares/isExistbyEmail";


const router: Router = Router();


router.post("/reg", joiValid(joiUser), authController.registerUser.bind(authController));
router.post("/login", isUserExist, joiValid(joiUser), authController.loginUser.bind(authController));


export default router;
