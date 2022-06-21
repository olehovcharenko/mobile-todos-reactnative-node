import { NextFunction, Request, Response } from "express";
import TodoService from "../services/todo.service";
import { AddTodo, DeleteTodo, EditTodo } from "todos.type";
import { ParamsDictionary } from "express-serve-static-core";

export class TodoController {
  constructor(private todoService: TodoService) {
  }

  async getAllTodo(req: Request, res: Response) {
    const todos = await this.todoService.findAll(res.locals.user.id, req.query);
    res.status(200).json(todos);
  }

  async addTodo(req: Request<{}, {}, AddTodo>, res: Response) {
    const todo = await this.todoService.addTodo(req.body, res.locals.user.id);
    res.status(200).json(todo);
  }

  async editTodo(req: Request<{}, {}, EditTodo>, res: Response) {
    const todo = await this.todoService.editTodo(req.body, res.locals.user.id);
    res.status(200).json(todo);
  }

   async deleteTodo(
    req: Request<ParamsDictionary, {}, DeleteTodo>,
    next: NextFunction
  ) {
    await this.todoService.deleteTodo(req.params.id);
    next();
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;