import { IPayload } from '@helpers/networking';
import { ILogin } from '@interfaces/ilogin';
import { IWalletTopUp } from 'src/interfaces/iwallet';

class WalletPayload {
  currentBalance(): IPayload {
    return {
      method: 'get',
      url: '/wallet/current',
    };
  }
  topUp(body: IWalletTopUp): IPayload {
    return {
      body,
      method: 'post',
      url: '/wallet/topup',
    };
  }
}

export default new WalletPayload();
