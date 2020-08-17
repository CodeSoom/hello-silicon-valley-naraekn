import React from 'react';

import styled from '@emotion/styled';

import BackButton from './BackButton';
import NextButton from './NextButton';
import ProgressIndicator from './ProgressIndicator';

import {
  isOverview,
  calculatePercent,
} from '../../utils';

import {
  BOTTOM_BAR_HEIGHT,
} from '../../styles/constants';

import {
  questionnaireCount,
} from '../../data/questionniare-meta';

const ButtonsContainer = styled.div(({ isFirstPage }) => ({
  width: '100%',
  padding: '0 1em',
  display: 'flex',
  alignItems: 'center',
  justifyContent: isFirstPage
    ? 'flex-end'
    : 'space-between',
  height: BOTTOM_BAR_HEIGHT,
  background: '#F8F8F8',
  borderTop: '.5px solid #DDD',
}));

const BarContainer = styled.div({
  zIndex: 10000,
  position: 'fixed',
  bottom: 0,
  width: '100%',
  maxWidth: '500px',
});

export default function BottomBar({
  type, id, previousId, disabled,
  handleClickBack, handleClickNext,
}) {
  const hidden = isOverview(type);
  const percent = calculatePercent(id, questionnaireCount);

  return (
    <BarContainer>
      <ProgressIndicator
        hidden={hidden}
        percent={percent}
      />
      <ButtonsContainer isFirstPage={previousId === null}>
        {previousId
            && (
              <BackButton
                onClick={handleClickBack}
              />
            )}
        <NextButton
          onClick={handleClickNext}
          disabled={disabled}
        />
      </ButtonsContainer>
    </BarContainer>

  );
}
