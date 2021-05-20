import React, { useContext, useState } from 'react';
import { Alert } from 'react-native';
import { HomeStyled } from './login.styled';

import Typography from '@components/Typography';
import Input from '@components/Input';
import Button from '@components/Button';

import { Formik, FormikHandlers, FormikProps } from 'formik';
import * as Yup from 'yup';

import { callAPI } from '@helpers/networking';
import AuthPayload from 'src/libraries/api/auth';
import { AuthContext } from '@helpers/auth';

const validationSchema = Yup.object({
  email: Yup.string().required().email(),
  password: Yup.string().required(),
});

interface IInitialValues {
  email: string;
  password: string;
}

const initialValues = {
  email: '',
  password: '',
};

function HomeContainer() {
  const [loading, setLoading] = useState<boolean>(false);
  const { setToken } = useContext(AuthContext);

  const onSubmit = async (values: IInitialValues) => {
    const payload = AuthPayload.login(values);
    console.log('payload :: ', JSON.stringify(values));
    setLoading(true);
    try {
      const response = await callAPI(payload);
      if (response.data.token) {
        setToken(String(response.data.token));
      } else {
        Alert.alert('gagal', 'email dan password salah');
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      Alert.alert('testing', JSON.stringify(error, null, 2));
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values: IInitialValues) => onSubmit(values)}
      validationSchema={validationSchema}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }: FormikHandlers & FormikProps<IInitialValues>) => (
        <HomeStyled>
          <Typography children="DompetKu" variant="title" />
          <Input
            placeholder="Email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            helperText={touched.email && errors.email}
            error={Boolean(touched.email) && Boolean(errors.email)}
          />
          <Input
            secureTextEntry
            placeholder="Password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            helperText={touched.password && errors.password}
            error={Boolean(touched.password) && Boolean(errors.password)}
          />
          <Button
            title="login"
            children={loading ? 'Please wait...' : 'Login'}
            onPress={handleSubmit}
          />
        </HomeStyled>
      )}
    </Formik>
  );
}

export default HomeContainer;
