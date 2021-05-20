import { useNavigation } from '@react-navigation/core';
import React from 'react';

import { Text } from 'react-native';
import { ActionGroupStyled, ActionGroupItem } from '../home.styled';

import { Transfer, Pay, TopUp } from '@components/Icons';
import Typography from '@components/Typography';

function ActionsGroup() {
  const navigation = useNavigation();
  return (
    <ActionGroupStyled>
      <ActionGroupItem disabled>
        <Transfer />
        <Typography children="Transfer" />
      </ActionGroupItem>
      <ActionGroupItem disabled>
        <Pay />
        <Typography children="Bayar" />
      </ActionGroupItem>
      <ActionGroupItem onPress={() => navigation.navigate('Top Up Wallet')}>
        <TopUp />
        <Typography children="Top Up" />
      </ActionGroupItem>
    </ActionGroupStyled>
  );
}

export default ActionsGroup;
