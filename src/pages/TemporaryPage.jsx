import React from 'react';

import styled from '@emotion/styled';

import TopBar from '../components/tests/TopBar';
import BottomBar from '../components/tests/BottomBar';
import QuestionText from '../components/tests/QuestionText';
import AnswerText from '../components/tests/AnswerText';

import {
  TOP_BAR_HEIGHT,
  BOTTOM_BAR_HEIGHT,
} from '../styles/constants';

const Container = styled.div({
  paddingTop: TOP_BAR_HEIGHT,
  paddingBottom: BOTTOM_BAR_HEIGHT,
  background: '#FFF',
});

// TODO: This page should be deleted later

export default function TemporaryPage() {
  return (
    <Container>
      <TopBar />
      <QuestionText />
      <AnswerText />
      <BottomBar />
    </Container>
  );
}
