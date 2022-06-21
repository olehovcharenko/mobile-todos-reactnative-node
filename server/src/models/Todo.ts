import mongoose = require("mongoose");
import { ITodo } from "todos.type";
import Joi from "joi";

export const joiTodo = Joi.object().keys({
 _id: Joi.string(),
 title: Joi.string().required(),
 text: Joi.string().required(),
 year: Joi.number().integer(),
 isPublic: Joi.boolean(),
 isCompleted: Joi.boolean(),
 authorId: Joi.string(),


});

const TodoSchema = new mongoose.Schema({
 title: {
  type: String,
  required: true
 },
 text: {
  type: String,
  required: true
 },
 year: {
  type: Number,
  default: new Date().getFullYear()
 },
 isCompleted: {
  type: Boolean,
  default: false
 },
 isPublic: {
  type: Boolean,
  default: false
},
authorId: {
 type: String,
}

});

 export const Todo = mongoose.model<ITodo>("Todo", TodoSchema);
