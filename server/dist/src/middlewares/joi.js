"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const joiValid = (joi) => (_, _res, next) => {
    const { error } = joi.validate(_.body);
    if (error) {
        next(error);
    }
    next();
};
exports.default = joiValid;
//# sourceMappingURL=joi.js.map