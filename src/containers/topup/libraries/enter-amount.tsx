import React, { PropsWithChildren } from 'react';
import Typography from '@components/Typography';
import {
  EnterAmountStyled,
  EnterAmountInput,
  HelperText,
} from '../topup.styled';

interface IEnterAmount {
  onChangeText: (e: any) => void;
  onBlur: (e: any) => void;
  value: any;
  helperText?: string | boolean;
  error?: boolean;
}

function EnterAmount(props: PropsWithChildren<IEnterAmount>) {
  return (
    <EnterAmountStyled>
      <Typography children="ENTER AMOUNT" />
      <EnterAmountInput
        {...props}
        keyboardType="number-pad"
        placeholder="Rp0"
      />
      <HelperText children={props.helperText} error={Boolean(props.error)} />
    </EnterAmountStyled>
  );
}

export default EnterAmount;
