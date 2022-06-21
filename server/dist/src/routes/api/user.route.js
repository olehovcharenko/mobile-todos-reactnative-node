"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./../../models/User");
const express_1 = require("express");
const auth_controller_1 = __importDefault(require("../../controllers/auth.controller"));
const joi_1 = __importDefault(require("./../../middlewares/joi"));
const isExistbyEmail_1 = __importDefault(require("../../middlewares/isExistbyEmail"));
const router = express_1.Router();
router.post("/reg", joi_1.default(User_1.joiUser), auth_controller_1.default.registerUser.bind(auth_controller_1.default));
router.post("/login", isExistbyEmail_1.default, joi_1.default(User_1.joiUser), auth_controller_1.default.loginUser.bind(auth_controller_1.default));
exports.default = router;
//# sourceMappingURL=user.route.js.map