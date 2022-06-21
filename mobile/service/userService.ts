import { IUser } from './../types/IUser';
import HttpService from './mainService';

class UserService extends HttpService {
  constructor() {
    super();
  }

  async login(data: IUser) {
    return await this.post({ url: 'user/login', data }, false);
  }

  async reg(data: IUser) {
    return await this.post({ url: 'user/reg', data }, false);
  }
};

export default UserService;