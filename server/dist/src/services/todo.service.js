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
const Todo_1 = require("../models/Todo");
const errorHelper_1 = __importDefault(require("./../helper/errorHelper"));
class TodoService {
    findAll(userId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = {};
            const pageSize = params.size ? Number(params.size) : 2;
            const page = params.page ? (Number(params.page) - 1) * pageSize : 0;
            if (params.status)
                query.isCompleted = params.status === "completed";
            if (params.privacy)
                query.isPublic = params.privacy === "private";
            if (params.search)
                query.title = { $regex: params.search, $options: "i" };
            const notes = yield Todo_1.Todo.find(query).skip(page).limit(pageSize);
            if (!notes.length) {
                throw errorHelper_1.default.BadRequest("There are no notes were found");
            }
            return notes.filter((n) => n.authorId === userId || n.isPublic);
        });
    }
    addTodo(todo, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const note = yield Todo_1.Todo.create({
                title: todo.title,
                description: todo.description,
                isPublic: todo.isPublic,
                year: todo.year,
                isCompleted: todo.isCompleted,
                userId: userId,
            });
            if (!note) {
                throw errorHelper_1.default.BadRequest("Error occurred during saving note");
            }
            return note;
        });
    }
    editTodo(todo, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const note = yield Todo_1.Todo.findOne({ _id: todo.id });
            if (!note) {
                throw errorHelper_1.default.BadRequest("Note was not found");
            }
            else if (note && note.authorId === userId) {
                return Todo_1.Todo.findOneAndUpdate({ _id: todo.id }, {
                    title: todo.title,
                    description: todo.description,
                    isPublic: todo.isPublic,
                    year: todo.year,
                    isCompleted: todo.isCompleted,
                });
            }
            else {
                throw errorHelper_1.default.BadRequest("You have no access to editing this note");
            }
        });
    }
    deleteTodo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const note = yield Todo_1.Todo.findOne({ _id: id });
            yield Todo_1.Todo.findOneAndDelete({ _id: id });
        });
    }
}
exports.default = TodoService;
//# sourceMappingURL=todo.service.js.map