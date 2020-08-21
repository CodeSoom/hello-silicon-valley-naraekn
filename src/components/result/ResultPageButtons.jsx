import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div({
  display: 'flex',
  width: '100%',
  padding: '2em',
});

const HomeButton = styled.button({
  float: 'left',
  height: '3em',
  width: '7em',
  color: '#FFF',
  border: '2px solid #FFF',
  borderRadius: '2em',
  backgroundColor: 'transparent',
  fontWeight: 'bold',
  fontFamily: 'Source Code Pro',
  boxShadow: '0 4px 4px -4px rgba(0,0,0,.3)',
  outline: 'none',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    boxShadow: '0 10px 10px -10px rgba(0,0,0,.4)',
  },
});

const AboutButton = styled.button({
  float: 'right',
  flexGrow: 1,
  height: '3em',
  width: '8em',
  marginLeft: '1em',
  border: '2.5px solid #FFF',
  borderRadius: '2em',
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  fontWeight: 'bold',
  fontFamily: 'Source Code Pro',
  boxShadow: '0 6px 6px -6px rgba(0,0,0,.3)',
  outline: 'none',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    boxShadow: '0 10px 10px -10px rgba(0,0,0,.4)',
  },
});

export default function ResultPageButtons() {
  return (
    <Container>
      <HomeButton
        type="button"
      >
        HOME
      </HomeButton>
      <AboutButton type="button">
        CONTRIBUTORS
        {' '}
        <span role="img" aria-label="congrats">🥳</span>
      </AboutButton>
    </Container>
  );
}
