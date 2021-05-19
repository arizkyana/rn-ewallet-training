import React, { PropsWithChildren } from 'react';
import Typography from '@components/Typography';
import { ProceedButtonStyled, PaymentMethodStyled } from '../topup.styled';

interface IProceedButton {
  onPress: () => void;
}

function ProceedButton(props: PropsWithChildren<IProceedButton>) {
  return (
    <PaymentMethodStyled>
      <ProceedButtonStyled onPress={props.onPress}>
        <Typography color="white" variant="body" children="PROCEED" />
      </ProceedButtonStyled>
    </PaymentMethodStyled>
  );
}

export default ProceedButton;
