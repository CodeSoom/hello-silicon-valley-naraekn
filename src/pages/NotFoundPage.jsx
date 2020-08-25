import React from 'react';

import styled from '@emotion/styled';

import { HOME_GRADIENT_COLOR } from '../styles/constants';

const Container = styled.div({
  display: 'flex',
  width: '100%',
  height: '100%',
  padding: '',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: `linear-gradient(
    60deg,
    ${HOME_GRADIENT_COLOR[0]}, 
    ${HOME_GRADIENT_COLOR[1]}
  )`,
  backgroundAttachment: 'fixed',
  '& h3': {
    color: '#FFF',
    fontFamily: 'Source Code Pro',
  },
});

export default function NotFoundPage() {
  return (
    <Container>
      <h3>404 Not Found</h3>
    </Container>
  );
}
