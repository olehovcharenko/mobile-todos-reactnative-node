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
exports.TodoController = void 0;
const todo_service_1 = __importDefault(require("../services/todo.service"));
class TodoController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    getAllTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const todos = yield this.todoService.findAll(res.locals.user.id, req.query);
            res.status(200).json(todos);
        });
    }
    addTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = yield this.todoService.addTodo(req.body, res.locals.user.id);
            res.status(200).json(todo);
        });
    }
    editTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = yield this.todoService.editTodo(req.body, res.locals.user.id);
            res.status(200).json(todo);
        });
    }
    deleteTodo(req, next) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.todoService.deleteTodo(req.params.id);
            next();
        });
    }
}
exports.TodoController = TodoController;
const todoController = new TodoController(new todo_service_1.default());
exports.default = todoController;
//# sourceMappingURL=todo.controller.js.map