import Styled from '@emotion/native';

import COLORS from '@libraries/colors';

export const ButtonView = Styled.View({
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 20,
  paddingRight: 20,
  borderRadius: 5,
  backgroundColor: COLORS.PRIMARY.MAIN,
  width: 100,
});

export const ButtonStyled = Styled.Pressable({
  width: '100%',
  alignItems: 'center',
});

export const ButtonText = Styled.Text({
  fontSize: 15,
  color: '#f0f8ff',
});
