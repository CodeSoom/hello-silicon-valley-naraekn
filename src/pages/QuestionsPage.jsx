import React from 'react';

import { useParams, useHistory } from 'react-router-dom';

import QuestionsContainer from '../containers/QuestionsContainer';

export default function QuestionsPage({ params }) {
  const { id } = params || useParams();

  const history = useHistory();

  function handleClickLink(newId) {
    history.push(`/tests/${newId}`);
  }

  return (
    <QuestionsContainer
      questionId={id}
      handleClickLink={handleClickLink}
    />
  );
}
