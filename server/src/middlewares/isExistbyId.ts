import { Request, Response, NextFunction } from "express";


const isExistById = (DB: any) => async (_: Request, res: Response, next: NextFunction) => {
 const id = _.params.id;
 try {
  await DB.findById(id);
  next();
 } catch (error) {
  return res.status(400).send("wrong id");
 }
};

export default isExistById;