import React from 'react';

import { MainContainer } from '../../components/container';
import { Header } from '../../components/header';
import { Main } from './main';

export const HomeScreen = () => {
  return (
    <MainContainer>
      <Header />
      <Main />
    </MainContainer>
  );
};
