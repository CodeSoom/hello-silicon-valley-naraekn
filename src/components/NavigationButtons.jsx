import React from 'react';

import styled from '@emotion/styled';

import BackButton from './who-are-you/BackButton';
import NextButton from './who-are-you/NextButton';
import SubmitButton from './who-are-you/SubmitButton';

import {
  BOTTOM_BAR_HEIGHT,
} from '../styles/constants';

import { isNextButtonDisabled } from '../utils';

const ButtonsWrapper = styled.div(({ isFirstPage }) => ({
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

export default function NavigationButtons({
  test, selectedAnswer,
  handleClickBack, handleClickNext, handleClickSubmit,
}) {
  const isFirstPage = (test.previousId === null);
  const isLastPage = (test.nextId === null);
  const disabled = isNextButtonDisabled(selectedAnswer, test.type);

  return (
    <ButtonsWrapper isFirstPage={isFirstPage}>
      {isFirstPage
          || (
            <BackButton
              onClick={handleClickBack}
            />
          )}
      {isLastPage
        ? (
          <SubmitButton
            onClick={handleClickSubmit}
            disabled={disabled}
          />
        )
        : (
          <NextButton
            onClick={handleClickNext}
            disabled={disabled}
          />
        )}
    </ButtonsWrapper>
  );
}
