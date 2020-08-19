import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div({
  display: 'flex',
  margin: '2em',
});

const TryAgainButton = styled.button({
  float: 'left',
  height: '3em',
  width: '8em',
  color: '#FFF',
  border: '2px solid #FFF',
  borderRadius: '2em',
  backgroundColor: 'transparent',
  fontWeight: 'bold',
  padding: '.4em',
});

const AboutButton = styled.button({
  float: 'right',
  flexGrow: 1,
  height: '3em',
  width: '8em',
  padding: '.4em',
  marginLeft: '1em',
  color: '#FFF',
  border: '2px solid #FFF',
  borderRadius: '2em',
  backgroundColor: 'transparent',
  fontWeight: 'bold',
});

export default function ResultPageButtons() {
  return (
    <Container>
      <TryAgainButton
        type="button"
      >
        Try Again
      </TryAgainButton>
      <AboutButton
        type="button"
      >
        About
      </AboutButton>
    </Container>
  );
}
