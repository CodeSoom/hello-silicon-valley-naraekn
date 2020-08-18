import React from 'react';

import styled from '@emotion/styled';

import { ACCENT_COLOR } from '../../styles/constants';

const Container = styled.div({
  padding: '2em',
  backgroundColor: '#F5F5F5',
  boxShadow: '0 3px 3px -3px rgba(0,0,0,.2)',
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
