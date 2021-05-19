import React, { PropsWithChildren } from 'react';
import { TypoStyled, TypoText } from './typo.styled';

export type TVariant = 'title' | 'subTitle' | 'body' | 'caption';
export type TColor = 'white' | 'primary' | 'secondary' | 'alert';
export interface IPropsTypo {
  variant?: TVariant;
  color?: TColor;
}

function TypoComponent(props: PropsWithChildren<IPropsTypo>) {
  return (
    <TypoStyled>
      <TypoText {...props} />
    </TypoStyled>
  );
}

export default TypoComponent;
