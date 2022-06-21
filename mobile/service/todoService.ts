import { ITodo } from './../types/ITodo';
import HttpService from './mainService';
import { IData } from '../types/IData';
import jwtDecode from 'jwt-decode';
import {AxiosResponse} from "axios";

class TodoService extends HttpService {
  constructor() {
    super();
  }

  async getAllTodos(params: string, page: number, pageLength = 3) {
    return await this.get({ url: `todos?page=${page}&pageLength=${pageLength}
    ${params}` });
  }

  async putTodo(data: ITodo, id: string) {
    return await this.put({ url: `todos/${id}`, data });
  }

  async getOneTodo(id: string) {
    return await this.get({ url: `todos/${id}` });
  }

  async postTodo(data: ITodo) {
    return await this.post({ url: 'todos', data });
  }

  async deleteTodo(id: string) {
    return await this.delete({ url: `todos/${id}` });
  }

  getUserId(data: IData) {
    const user:
      { id: string } = jwtDecode(data.config.headers.Authorization.split(' ')[1]);
    return user.id;
  }
}

export default TodoService;
