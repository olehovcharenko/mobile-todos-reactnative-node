import { Request, Response, NextFunction } from "express";

import { Todo } from "./../models/Todo";


function isExist(DB: typeof Todo) {
    return async (_: Request, res: Response, next: NextFunction) => {
        const id = _.params.id;

        try {
            await DB.findById(id);
            next();
        } catch (error) {
            res.status(400).send("Incorrect ID");
        }
    };
}

export default isExist;