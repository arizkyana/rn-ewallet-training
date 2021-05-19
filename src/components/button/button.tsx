import React, { PropsWithChildren } from 'react';

import { ButtonStyled, ButtonText, ButtonView } from './button.styled';

interface IButton {
  variant?: string;
  title: string;
  onPress: () => void;
}

function ButtonComponent(props: PropsWithChildren<IButton>) {
  return (
    <ButtonView>
      <ButtonStyled onPress={props.onPress}>
        <ButtonText children={props.title} />
      </ButtonStyled>
    </ButtonView>
  );
}

export default ButtonComponent;
