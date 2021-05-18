import React from 'react';
import { InputStyled, InputControl } from './input.styled';

interface IInputProps {
  placeholder?: string;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
}

function InputComponent(props: IInputProps) {
  return (
    <InputStyled>
      <InputControl {...props} />
    </InputStyled>
  );
}

export default InputComponent;
