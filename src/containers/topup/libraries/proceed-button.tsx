import React, { PropsWithChildren } from 'react';
import Typography from '@components/Typography';
import { ProceedButtonStyled, PaymentMethodStyled } from '../topup.styled';

interface IProceedButton {
  onPress: () => void;
  disabled?: boolean;
}

function ProceedButton(props: PropsWithChildren<IProceedButton>) {
  return (
    <PaymentMethodStyled>
      <ProceedButtonStyled onPress={props.onPress} disabled={props.disabled}>
        <Typography color="white" variant="body" children="PROCEED" />
      </ProceedButtonStyled>
    </PaymentMethodStyled>
  );
}

export default ProceedButton;
