import React from 'react';
import { HomeStyled } from './home.styled';

import Typography from '@components/Typography';
import Input from '@components/Input';
import Button from '@components/Button';

import { Formik, FormikHandlers } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required(),
  password: Yup.string().required(),
});

const initialValues = {
  username: '',
  password: '',
};

function HomeContainer() {
  const handleSubmit = (values: any) => {
    console.log('values :: ', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}>
      {({ handleChange, handleBlur }: FormikHandlers) => (
        <HomeStyled>
          <Typography children="DompetKu" />
          <Input
            placeholder="Username"
            onChange={handleChange('username')}
            onBlur={handleBlur('username')}
          />
          <Input
            placeholder="Password"
            onChange={handleChange('password')}
            onBlur={handleBlur('password')}
          />
          <Button
            title="login"
            children="Login"
            onPress={() => {
              console.log('test');
            }}
          />
        </HomeStyled>
      )}
    </Formik>
  );
}

export default HomeContainer;
