import React, { useContext } from 'react';

import { TopUpStyled, TopUpSafeAreaView } from './topup.styled';
import EnterAmount from './libraries/enter-amount';
import ProceedButton from './libraries/proceed-button';

import { Formik, FormikHandlers, FormikProps } from 'formik';
import * as Yup from 'yup';
import WalletPayload from '@libraries/api/wallet';
import { callAPI } from 'src/helpers/networking';
import { AuthContext } from 'src/helpers/auth';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';

interface ITopup {
  amount: string;
}

const validationSchema = Yup.object({
  amount: Yup.number().required().min(10000),
});

const initialValues: ITopup = {
  amount: '',
};

function TopUpContainer() {
  const { token } = useContext(AuthContext);
  const { navigate } = useNavigation();
  const onSubmit = async (values: ITopup) => {
    const payload = WalletPayload.topUp({
      amount: Number(values.amount),
      wallet_id: '1',
    });
    try {
      const response = await callAPI(payload, token);
      console.log('response :: ', response);
      Alert.alert('success', 'berhasil topup e-wallet kamu', [
        { text: 'OK', onPress: () => navigate('DompetKu') },
      ]);
    } catch (error) {
      console.log(error);
      Alert.alert('error', JSON.stringify(error, null, 2));
    }
  };

  return (
    <TopUpSafeAreaView>
      <TopUpStyled>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values: ITopup) => onSubmit(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
          }: FormikHandlers & FormikProps<ITopup>) => (
            <>
              <EnterAmount
                onChangeText={handleChange('amount')}
                onBlur={handleBlur('amount')}
                value={values.amount}
                helperText={errors.amount}
                error={Boolean(errors.amount)}
              />
              <ProceedButton onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </TopUpStyled>
    </TopUpSafeAreaView>
  );
}

export default TopUpContainer;
