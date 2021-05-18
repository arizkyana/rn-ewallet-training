import React, { PropsWithChildren } from 'react';
import { TypoStyled, TypoText } from './typo.styled';

interface IPropsTypo {
  variant?: string;
}

function TypoComponent({ children }: PropsWithChildren<IPropsTypo>) {
  return (
    <TypoStyled>
      <TypoText children={children} />
    </TypoStyled>
  );
}

export default TypoComponent;
