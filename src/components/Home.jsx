import React from 'react';

import styled from '@emotion/styled';

import HomeTitle from './home/HomeTitle';
import HomeButtons from './home/HomeButtons';

import { HOME_GRADIENT_COLOR } from '../styles/constants';

const Container = styled.div({
  display: 'flex',
  width: '100%',
  height: '100%',
  padding: '2em',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  backgroundImage: `linear-gradient(
    60deg,
    ${HOME_GRADIENT_COLOR[0]}, 
    ${HOME_GRADIENT_COLOR[1]}
  )`,
});

export default function Home({
  handleClickTest, handleClickAbout,
}) {
  return (
    <Container>
      <HomeTitle />
      <HomeButtons
        onClickTest={handleClickTest}
        onClickAbout={handleClickAbout}
      />
    </Container>
  );
}
