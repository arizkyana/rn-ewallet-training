import Styled from '@emotion/native';

import COLORS from '@libraries/colors';

export const HomeStyled = Styled.View({
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: 20,
  backgroundColor: 'white',
});

export const ScrollStyled = Styled.ScrollView({
  height: '100%',
});

export const CurrentBalanceStyled = Styled.View({
  padding: 40,
  borderRadius: 10,
  backgroundColor: COLORS.PRIMARY.MAIN,
  width: '100%',
});

export const ActionGroupStyled = Styled.View({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  marginTop: 30,
  marginBottom: 30,
});

export const ActionGroupItem = Styled.TouchableHighlight({
  width: '30%',
  borderRadius: 15,
  height: 100,
  alignItems: 'center',
  alignContent: 'center',
  borderWidth: 1,
  display: 'flex',
  justifyContent: 'center',
});

export const LastTransactionStyled = Styled.View({
  width: '100%',
});

export const LastTransactionListView = Styled.FlatList({
  width: '100%',
  height: '100%',
  paddingTop: 20,
  paddingBottom: 30,
});

export const LastTransactionItem = Styled.TouchableHighlight({
  borderWidth: 1,
  marginTop: 5,
  marginBottom: 5,
  paddingTop: 20,
  paddingBottom: 20,
  borderRadius: 8,
  paddingLeft: 10,
  borderColor: COLORS.PRIMARY.SECONDARY,
});
