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
const User_1 = __importDefault(require("../models/User"));
const errorHelper_1 = __importDefault(require("../helper/errorHelper"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("config"));
class AuthService {
    registration(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.default.findOne({ email: email });
            if (!user) {
                const cryptoPassword = bcryptjs_1.default.hashSync(password, bcryptjs_1.default.genSaltSync(10));
                const userData = yield User_1.default.create({
                    email: email,
                    password: cryptoPassword,
                });
                return {
                    authToken: jsonwebtoken_1.default.sign({
                        email: userData.email,
                        id: userData._id,
                    }, config_1.default.get("jwtSecret"), { expiresIn: config_1.default.get("jwtExpiration") }),
                    authorId: userData._id,
                };
            }
            else {
                throw errorHelper_1.default.BadRequest("User with this login already exist");
            }
        });
    }
    login(password, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const passwordSync = bcryptjs_1.default.compareSync(password, user.password);
            if (passwordSync) {
                return {
                    authToken: jsonwebtoken_1.default.sign({
                        email: user.email,
                        id: user._id,
                    }, config_1.default.get("jwtSecret"), { expiresIn: config_1.default.get("jwtExpiration") }),
                    userId: user._id,
                };
            }
            else {
                throw errorHelper_1.default.BadRequest("Wrong login or password");
            }
        });
    }
}
exports.default = AuthService;
//# sourceMappingURL=auth.service.js.map