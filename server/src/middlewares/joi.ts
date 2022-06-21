import { Request, Response, NextFunction } from "express";

import { joiTodo } from "./../models/Todo";


const joiValid = (joi: typeof joiTodo) => (_: Request, _res: Response, next: NextFunction) => {
        const { error } = joi.validate(_.body);
        if (error) {
            next(error);
        }
        next();
    };




export default joiValid;