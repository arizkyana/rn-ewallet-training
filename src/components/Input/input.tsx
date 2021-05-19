import React from 'react';
import { InputStyled, InputControl, HelperText } from './input.styled';
interface IInputProps {
  placeholder?: string;
  onChangeText?: (e: any) => void;
  onBlur?: (e: any) => void;
  secureTextEntry?: boolean;
  value?: any;
  helperText?: string;
  error?: boolean;
}

function InputComponent(props: IInputProps) {
  return (
    <InputStyled>
      <InputControl {...props} />
      <HelperText children={props.helperText} error={Boolean(props.error)} />
    </InputStyled>
  );
}

export default InputComponent;
