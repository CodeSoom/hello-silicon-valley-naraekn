import React from 'react';

import styled from '@emotion/styled';

import { LogoImage } from '../../assets/images';

import { TOP_BAR_HEIGHT } from '../../styles/constants';

const Container = styled.div({
  zIndex: 10000,
  position: 'fixed',
  top: 0,
  margin: '0 auto',
  width: '100%',
  maxWidth: '500px',
  height: TOP_BAR_HEIGHT,
  background: '#F3F3F3',
  borderBottom: '2px solid #DDD',
  '& img': {
    height: '3em',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
});

export default function TopBar() {
  return (
    <Container>
      <img
        src={LogoImage}
        alt=""
      />
    </Container>
  );
}
