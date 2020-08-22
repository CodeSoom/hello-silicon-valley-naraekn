import React from 'react';

import Overview from './Overview';
import Question from './Question';

import {
  isOverview,
  isQuestion,
} from '../utils';

import { FeedLayout } from '../styles/who-are-you';

export default function WhoAreYou({
  test, images, selectedAnswer,
  handleClickOption,
}) {
  const { id, type, content } = test;

  const handleClickAnswer = (answerId) => handleClickOption({
    questionId: id,
    answerId,
  });

  return (
    <FeedLayout>
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
            selectedAnswer={selectedAnswer}
            handleClickAnswer={handleClickAnswer}
          />
        )
      }
    </FeedLayout>
  );
}
