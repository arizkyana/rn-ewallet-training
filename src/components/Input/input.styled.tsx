import Styled from '@emotion/native';

import COLORS from '@libraries/colors';

export const InputStyled = Styled.View({
  width: '100%',
  paddingBottom: 10,
  paddingTop: 10,
  margin: 5,
});

export const InputControl = Styled.TextInput({
  width: '100%',
  fontSize: 20,
  borderColor: COLORS.PRIMARY.MAIN,
  borderBottomWidth: 1,
  padding: 10,
});

export const HelperText = Styled.Text((props: { error: boolean }) => ({
  fontSize: 15,
  color: props.error ? 'red' : COLORS.PRIMARY.SECONDARY,
}));
