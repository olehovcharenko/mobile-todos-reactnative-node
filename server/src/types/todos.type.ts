import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";



export interface ITodo {
 _id: string;
 title: string;
 text: string;
 year?: number;
 completed?: boolean;
 isPublic?: boolean;
authorId?: string;
} 
 



export interface RequestWithUser extends Request {
    user: string | JwtPayload;
}

export interface AddTodo {
    title: string;
    description: string;
    year: number;
    isPublic: boolean;
    isCompleted: boolean;
}

export interface EditTodo extends AddTodo {
    id: string;
}

export interface DeleteTodo {
    id: string;
}

export interface Params {
    page: any;
    size: any;
    status?: string;
    privacy?: string;
    search?: string;
}