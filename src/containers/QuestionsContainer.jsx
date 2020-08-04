import React from 'react';

import Answers from '../components/Answers';
import Questions from '../components/Questions';
import PageRoutingButtons from '../components/PageRoutingButtons';

import questionsAndAnswers from '../data/questions';

export default function QuestionsContainer({
  questionId, handleClickLink,
}) {
  // TODO: Decide when to get question and answer data
  const { question, answers } = questionsAndAnswers[questionId] ?? {};

  function handleClickAnswer() {
    // TODO: Save the user's answer in `Store`
  }

  return (
    <>
      <Questions
        question={question}
      />
      {
        answers && (
          <Answers
            answers={answers}
            handleClick={handleClickAnswer}
          />
        )
      }
      <PageRoutingButtons
        questionId={questionId}
        handleClick={handleClickLink}
      />
    </>
  );
}
