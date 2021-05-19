import React, { PropsWithChildren, useContext, useEffect, useState } from 'react';

import Typography from '@components/Typography';

import { CurrentBalanceStyled } from '../home.styled';
import { AuthContext } from 'src/helpers/auth';
import { callAPI } from 'src/helpers/networking';

import WalletPayload from '@libraries/api/wallet';
import { Alert } from 'react-native';

import currency from '@helpers/currency';
import { useIsFocused, useNavigation } from '@react-navigation/core';

function CurrentBalance(props: PropsWithChildren<{}>) {
  const { token } = useContext(AuthContext);
  const isFocused = useIsFocused();

  const [balance, setBalance] = useState<number>(0);

  const loadCurrentBalance = async () => {
    const payload = WalletPayload.currentBalance();
    try {
      const response = await callAPI(payload, token);
      console.log('response :: ', response);
      setBalance(response.data.balance);
    } catch (error) {
      console.log(error);
      Alert.alert('error', JSON.stringify(error, null, 2));
    }
  };

  /**
   * load current balance
   */
  useEffect(() => {
    console.log('isFocused :: ', isFocused);
    if (token) {
      loadCurrentBalance();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, isFocused]);

  return (
    <CurrentBalanceStyled>
      <Typography variant="subTitle" color="white" children="Saldo sekarang" />
      <Typography
        variant="title"
        color="white"
        children={`Rp. ${currency(String(balance))}`}
      />
    </CurrentBalanceStyled>
  );
}

export default CurrentBalance;
