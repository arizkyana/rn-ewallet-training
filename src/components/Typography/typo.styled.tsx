import Styled from '@emotion/native';

import COLORS from '@libraries/colors';

import { TVariant, TColor, IPropsTypo } from './typo';

function chooseVariant(variant?: TVariant) {
  switch (variant) {
    case 'body':
      return 12;
    case 'caption':
      return 10;
    case 'subTitle':
      return 18;
    case 'title':
      return 25;
    default:
      return 12;
  }
}

export const TypoStyled = Styled.View({});
export const TypoText = Styled.Text(({ color, variant }: IPropsTypo) => ({
  fontSize: chooseVariant(variant),
  fontWeight: 'bold',
  color: color === 'white' ? '#FFFFFF' : COLORS.PRIMARY.MAIN,
}));
