import Styled from '@emotion/native';
import COLORS from '@libraries/colors';

export const TopUpSafeAreaView = Styled.SafeAreaView({});

export const TopUpStyled = Styled.View({
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  backgroundColor: 'white',
});

export const EnterAmountStyled = Styled.View({
  padding: 15,
  width: '100%',
  // backgroundColor: 'white',
});

export const EnterAmountInput = Styled.TextInput({
  fontSize: 30,
  // borderWidth: 1,
  width: '100%',
  paddingTop: 15,
  paddingBottom: 10,
  borderBottomWidth: 1,
  color: COLORS.PRIMARY.SECONDARY,
});

export const ProceedButtonStyled = Styled.TouchableHighlight(
  (props: { disabled?: boolean }) => ({
    backgroundColor: props.disabled
      ? COLORS.PRIMARY.DISABLED
      : COLORS.PRIMARY.MAIN,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    borderRadius: 10,
  }),
);

export const PaymentMethodStyled = Styled.View({
  flex: 1,
  width: '100%',
  padding: 15,
});

export const HelperText = Styled.Text((props: { error: boolean }) => ({
  fontSize: 15,
  color: props.error ? 'red' : COLORS.PRIMARY.SECONDARY,
}));
