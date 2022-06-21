import { Request, Response, NextFunction } from "express";

type IController = (req: Request, res: Response, next: NextFunction) => Promise<any>;
export type { IController };