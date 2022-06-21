import { Response, Request } from "express";

const errorHandler = (controller: any) => async (_: Request, res: Response) => {
    try {
        return res.send(await controller(_, res));
    } catch (error) {
        return res.status(400).send(error);
    }
};

export default errorHandler;