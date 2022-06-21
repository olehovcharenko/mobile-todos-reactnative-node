import { Todo } from "../models/Todo";
import ErrorHandler from "./../helper/errorHelper";
import { AddTodo, EditTodo, Params } from "todos.type";
interface Query {
  isCompleted?: boolean;
  isPublic?: boolean;
  title?: {};
}
export default class TodoService {
  async findAll(userId: string, params: Params) {
    const query: Query = {};
    const pageSize = params.size ? Number(params.size) : 2;
    const page = params.page ? (Number(params.page) - 1) * pageSize : 0;
    if (params.status) query.isCompleted = params.status === "completed";
    if (params.privacy) query.isPublic = params.privacy === "private";
    if (params.search) query.title = { $regex: params.search, $options: "i" };
    const notes = await Todo.find(query).skip(page).limit(pageSize);
    if (!notes.length) {
      throw ErrorHandler.BadRequest("There are no notes were found");
    }
    return notes.filter((n) => n.authorId === userId || n.isPublic);
  }
  async addTodo(todo: AddTodo, userId: string) {
    const note = await Todo.create({
      title: todo.title,
      description: todo.description,
      isPublic: todo.isPublic,
      year: todo.year,
      isCompleted: todo.isCompleted,
      userId: userId,
    });
    if (!note) {
      throw ErrorHandler.BadRequest("Error occurred during saving note");
    }
    return note;
  }
  async editTodo(todo: EditTodo, userId: string) {
    const note = await Todo.findOne({ _id: todo.id });
    if (!note) {
      throw ErrorHandler.BadRequest("Note was not found");
    } else if (note && note.authorId === userId) {
      return Todo.findOneAndUpdate(
        { _id: todo.id },
        {
          title: todo.title,
          description: todo.description,
          isPublic: todo.isPublic,
          year: todo.year,
          isCompleted: todo.isCompleted,

        },
      );
    } else {
      throw ErrorHandler.BadRequest("You have no access to editing this note");
    }
  }
  async deleteTodo(id: string) {
    const note = await Todo.findOne({ _id: id });
      await Todo.findOneAndDelete({ _id: id });
    }
  }
