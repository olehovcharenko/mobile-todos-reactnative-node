import { Document, Model, model, Schema } from "mongoose";
import Joi from "joi";

// TODO: Use it as an example
/**
 * Interface to model the User Schema for TypeScript.
 * @param email:string
 * @param password:string
 * @param avatar:string
 */
export interface IUser extends Document {
    email: string;
    password: string;
    _id: string;
}


export const joiUser = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    avatar: Joi.string()
   });

const userSchema: Schema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User: Model<IUser> = model("User", userSchema);

export default User;