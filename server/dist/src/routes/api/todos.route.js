"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Todo_1 = require("../../models/Todo");
const express_1 = require("express");
const errorHandler_1 = __importDefault(require("../../middlewares/errorHandler"));
const todo_controller_1 = __importDefault(require("../../controllers/todo.controller"));
const joi_1 = __importDefault(require("../../middlewares/joi"));
const isExistbyId_1 = __importDefault(require("../../middlewares/isExistbyId"));
const passport_1 = __importDefault(require("passport"));
const todosRouter = express_1.Router();
todosRouter.get("/", passport_1.default.authenticate("jwt", { session: false }), todo_controller_1.default.getAllTodo.bind(todo_controller_1.default));
todosRouter.get("/:id", passport_1.default.authenticate("jwt", { session: false }), isExistbyId_1.default(Todo_1.Todo), errorHandler_1.default(todo_controller_1.default.getAllTodo.bind(todo_controller_1.default)));
todosRouter.post("", passport_1.default.authenticate("jwt", { session: false }), joi_1.default(Todo_1.joiTodo), errorHandler_1.default(todo_controller_1.default.addTodo.bind(todo_controller_1.default)));
todosRouter.put("/:id", passport_1.default.authenticate("jwt", { session: false }), isExistbyId_1.default(Todo_1.Todo), joi_1.default(Todo_1.joiTodo), errorHandler_1.default(todo_controller_1.default.editTodo.bind(todo_controller_1.default)));
todosRouter.delete("/:id", passport_1.default.authenticate("jwt", { session: false }), isExistbyId_1.default(Todo_1.Todo), errorHandler_1.default(todo_controller_1.default.deleteTodo.bind(todo_controller_1.default)));
exports.default = todosRouter;
//# sourceMappingURL=todos.route.js.map