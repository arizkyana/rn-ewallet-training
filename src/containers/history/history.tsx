import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { HomeStyled } from './history.styled';

import Typography from '@components/Typography';

function HomeContainer() {
  const navigation = useNavigation();

  return (
    <HomeStyled>
      <Typography children="this is the history" />
    </HomeStyled>
  );
}

export default HomeContainer;
