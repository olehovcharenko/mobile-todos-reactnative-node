
import { Todo, joiTodo } from "../../models/Todo";
import { Router } from "express";
import errorHandler from "../../middlewares/errorHandler"
import todoController from "../../controllers/todo.controller";
import joiValid from "../../middlewares/joi";
import isExistById from "../../middlewares/isExistbyId";

import passport from "passport";

const todosRouter: Router = Router();
todosRouter.get("/",
 passport.authenticate("jwt", { session: false }),
 todoController.getAllTodo.bind(todoController));

 todosRouter.get("/:id",
 passport.authenticate("jwt", { session: false }),
 isExistById(Todo),
 errorHandler(todoController.getAllTodo.bind(todoController)));

 todosRouter.post("",
 passport.authenticate("jwt", { session: false }),
 joiValid(joiTodo),
 errorHandler(todoController.addTodo.bind(todoController)));

 todosRouter.put("/:id",
 passport.authenticate("jwt", { session: false }),
 isExistById(Todo),
 joiValid(joiTodo),
 errorHandler(todoController.editTodo.bind(todoController)));

 todosRouter.delete("/:id",
 passport.authenticate("jwt", { session: false }),
 isExistById(Todo), errorHandler(todoController.deleteTodo.bind(todoController)));


export default todosRouter;