"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const auth_service_1 = __importDefault(require("../services/auth.service"));
class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    registerUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const token = yield this.userService.registration(email, password);
            token ? res.status(200).json(token) : next();
        });
    }
    loginUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { password } = req.body;
            const user = yield this.userService.login(password, res.locals.user);
            user ? res.status(200).json(user) : next();
        });
    }
    logoutUser(_, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.status(200).json({ success: true });
            next();
        });
    }
}
exports.UserController = UserController;
const userController = new UserController(new auth_service_1.default());
exports.default = userController;
//# sourceMappingURL=auth.controller.js.map