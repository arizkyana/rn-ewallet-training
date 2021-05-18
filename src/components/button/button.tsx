import React, { PropsWithChildren } from 'react';

import { ButtonStyled } from './button.styled';

interface IButton {
  variant?: string;
  title: string;
  onPress: () => void;
}

function ButtonComponent(props: PropsWithChildren<IButton>) {
  return <ButtonStyled {...props} />;
}

export default ButtonComponent;
