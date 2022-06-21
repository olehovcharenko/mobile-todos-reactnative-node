"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorHandler extends Error {
    constructor(status, message, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }
    static UnauthorizedError() {
        return new ErrorHandler(401, "User unauthorized");
    }
    static BadRequest(message, errors = []) {
        return new ErrorHandler(400, message, errors);
    }
}
exports.default = ErrorHandler;
//# sourceMappingURL=errorHelper.js.map