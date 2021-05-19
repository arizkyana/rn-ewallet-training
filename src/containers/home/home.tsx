import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { HomeStyled, ScrollStyled } from './home.styled';

import Typography from '@components/Typography';

// libraries
import CurrentBalance from './libraries/current-balance';
import ActionsGroup from './libraries/actions-group';
import LastTransaction from './libraries/last-transaction';

function HomeContainer() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <HomeStyled>
        <CurrentBalance />
        <ActionsGroup />
        <LastTransaction />
      </HomeStyled>
    </SafeAreaView>
  );
}

export default HomeContainer;
