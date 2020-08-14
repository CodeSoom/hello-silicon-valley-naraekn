import React from 'react';

import Overview from './Overview';
import Question from './Question';
import QuestionWithImages from './QuestionWithImages';
import TopBar from './who-are-you/TopBar';
import BottomBar from './who-are-you/BottomBar';

import {
  isOverview,
  isQuestion,
  isQuestionWithImages,
} from '../utils';

import { FeedContainer } from '../styles/feed';

// TODO: Find a substitute for the word `tests`
// TODO: Too many props
// TODO: Add `selectedAnswer`

export default function WhoAreYou({
  test, images,
  handleClickAnswer, handleClickNavigation, handleClickSubmit,
}) {
  const {
    previousId, nextId,
    type, content,
  } = test;

  const handleClickBack = () => handleClickNavigation(previousId);

  const handleClickNext = nextId === null
    ? (() => handleClickSubmit())
    : (() => handleClickNavigation(nextId));

  return (
    <FeedContainer>
      <TopBar />
      {
        isOverview(type) && (
          <Overview
            content={content}
            images={images}
          />
        )
      }
      {
        isQuestion(type) && (
          <Question
            content={content}
            images={images}
            handleClickAnswer={handleClickAnswer}
          />
        )
      }
      {
        isQuestionWithImages(type) && (
          <QuestionWithImages
            content={content}
            images={images}
            handleClickAnswer={handleClickAnswer}
          />
        )
      }
      <BottomBar
        previousId={previousId}
        nextId={nextId}
        handleClickBack={handleClickBack}
        handleClickNext={handleClickNext}
      />
    </FeedContainer>
  );
}
