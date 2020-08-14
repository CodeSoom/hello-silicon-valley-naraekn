import React from 'react';

import styled from '@emotion/styled';

import BackButton from './BackButton';
import NextButton from './NextButton';

import {
  BOTTOM_BAR_HEIGHT,
} from '../../styles/constants';

const Container = styled.div({
  zIndex: 10000,
  position: 'fixed',
  bottom: 0,
  width: '100%',
  maxWidth: '500px',
  padding: '1em',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: BOTTOM_BAR_HEIGHT,
  background: '#F8F8F8',
  borderTop: '.5px solid #DDD',
});

export default function BottomBar({
  previousId, nextId,
  handleClickBack, handleClickNext,
}) {
  return (
    <Container>
      {previousId
        && (
          <BackButton
            onClick={handleClickBack}
          />
        )}
      {nextId
        && (
          <NextButton
            onClick={handleClickNext}
          />
        )}
    </Container>
  );
}
