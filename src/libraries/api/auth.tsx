import { IPayload } from '@helpers/networking';
import { ILogin } from '@interfaces/ilogin';

class AuthPayload {
  login(body: ILogin): IPayload {
    return {
      body,
      method: 'post',
      url: '/login',
    };
  }
}

export default new AuthPayload();
