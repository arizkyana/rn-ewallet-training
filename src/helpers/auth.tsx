import React, { createContext } from 'react';

interface IAuthContext {
  token: string;
  setToken: (token: string) => void;
}

const initialContext: IAuthContext = {
  token: '',
  // eslint-disable-next-line prettier/prettier
  setToken: () => { },
};

export const AuthContext = createContext(initialContext);
