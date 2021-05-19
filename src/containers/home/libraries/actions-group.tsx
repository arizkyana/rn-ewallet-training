import { useNavigation } from '@react-navigation/core';
import React from 'react';

import { Text } from 'react-native';
import { ActionGroupStyled, ActionGroupItem } from '../home.styled';

function ActionsGroup() {
  const navigation = useNavigation();
  return (
    <ActionGroupStyled>
      <ActionGroupItem>
        <Text>Transfer</Text>
      </ActionGroupItem>
      <ActionGroupItem>
        <Text>Bayar</Text>
      </ActionGroupItem>
      <ActionGroupItem onPress={() => navigation.navigate('Top Up Wallet')}>
        <Text>Top Up</Text>
      </ActionGroupItem>
    </ActionGroupStyled>
  );
}

export default ActionsGroup;
