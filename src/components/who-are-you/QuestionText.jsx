import React from 'react';

import styled from '@emotion/styled';

import { ACCENT_COLOR } from '../../styles/constants';

const Container = styled.div({
  padding: '2em',
  backgroundColor: '#EEE',
});

const Title = styled.span({
  fontSize: '1.2em',
  fontWeight: 'bold',
});

const Icon = styled.i({
  fontSize: '1em',
  color: ACCENT_COLOR,
});

export default function QuestionText({ title, question }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Icon className="material-icons">
        verified
      </Icon>
      <div>
        {question}
      </div>
    </Container>
  );
}
