import React from 'react';

import styled from '@emotion/styled';

import { RESULT_GRADIENT_COLORS } from '../styles/constants';

import ProfileBar from './result/ProfileBar';
import ResultContent from './result/ResultContent';
import CompanyTitle from './result/CompanyTitle';
import ResultPageButtons from './result/ResultPageButtons';

const Container = styled.div(({ id }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '100vh',
  margin: 0,
  padding: 0,
  backgroundImage: `linear-gradient(
    60deg, 
    ${RESULT_GRADIENT_COLORS[id][0]}, 
    ${RESULT_GRADIENT_COLORS[id][1]}
  )`,
  backgroundAttachment: 'fixed',
}));

const Wrapper = styled.div({
  padding: 0,
  margin: 0,
});

export default function Result({ first, second, last }) {
  return (
    <Container id={first.id}>
      <Wrapper>
        <ProfileBar
          isBackgroundDark={first.type === 'dark'}
        />
        <CompanyTitle
          id={first.id}
        />
        <ResultContent
          first={first}
          second={second}
          last={last}
        />
      </Wrapper>
      <ResultPageButtons />
    </Container>
  );
}
