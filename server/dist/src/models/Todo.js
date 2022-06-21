"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = exports.joiTodo = void 0;
const mongoose = require("mongoose");
const joi_1 = __importDefault(require("joi"));
exports.joiTodo = joi_1.default.object().keys({
    _id: joi_1.default.string(),
    title: joi_1.default.string().required(),
    text: joi_1.default.string().required(),
    year: joi_1.default.number().integer(),
    isPublic: joi_1.default.boolean(),
    isCompleted: joi_1.default.boolean(),
    authorId: joi_1.default.string(),
});
const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        default: new Date().getFullYear()
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    isPublic: {
        type: Boolean,
        default: false
    },
    authorId: {
        type: String,
    }
});
exports.Todo = mongoose.model("Todo", TodoSchema);
//# sourceMappingURL=Todo.js.map