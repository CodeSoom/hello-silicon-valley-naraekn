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

// TODO: This should be removed later
const title = 'Question1';
const content = `
샌프란시스코의 Golden Gate Bridge 에서 우연히 만난 이상형. 
당장이라도 사랑에 빠질 것 같아요 ! 
그 사람은 어떤 스타일일까요 ?
`;

export default function QuestionText() {
  return (
    <Container>
      <Title>{title}</Title>
      <Icon className="material-icons">
        verified
      </Icon>
      <div>
        {content}
      </div>
    </Container>
  );
}
