import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { HomeStyled } from './wallet.styled';

import Typography from '@components/Typography';

function HomeContainer() {
  const navigation = useNavigation();

  return (
    <HomeStyled>
      <Typography children="this is wallet" />
    </HomeStyled>
  );
}

export default HomeContainer;
