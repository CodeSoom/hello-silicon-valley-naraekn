import React from 'react';

import styled from '@emotion/styled';

import { RESULT_GRADIENT_COLORS } from '../styles/constants';

import ProfileBar from './result/ProfileBar';
import ResultContent from './result/ResultContent';
import CompanyTitle from './result/CompanyTitle';
import ResultPageButtons from './result/ResultPageButtons';

const Container = styled.div(({ id }) => ({
  height: '100%',
  backgroundImage: `linear-gradient(
    60deg, 
    ${RESULT_GRADIENT_COLORS[9][0]}, 
    ${RESULT_GRADIENT_COLORS[9][1]}
  )`,
}));

// TODO: Props will be applied after the ResultPage design is fixed

export default function Result({ first, second, last }) {
  return (
    <Container>
      <ProfileBar />
      <CompanyTitle />
      <ResultContent />
      <ResultPageButtons />
    </Container>
  );
}
