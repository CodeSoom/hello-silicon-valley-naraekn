import React from 'react';

import styled from '@emotion/styled';

import { MAIN_GRADIENT_COLOR } from '../../styles/constants';

const Container = styled.div(({ hidden }) => ({
  display: 'flex',
  height: '.25em',
  backgroundColor: '#DDD',
  visibility: hidden ? 'hidden' : '',
}));

const Indicator = styled.div(({ percent }) => ({
  display: 'inline-block',
  height: '.25em',
  width: `${percent}%`,
  background: `linear-gradient(
    90deg, 
    ${MAIN_GRADIENT_COLOR[0]}, 
    ${MAIN_GRADIENT_COLOR[1]})`,
}));

export default function ProgressIndicator({ hidden, percent }) {
  return (
    <Container hidden={hidden}>
      <Indicator percent={percent} />
    </Container>
  );
}
