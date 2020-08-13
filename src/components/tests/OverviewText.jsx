import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div({
  padding: '1em 0',
  borderBottom: '.5px solid #DDD',
});

const Title = styled.div({
  fontSize: '1.2em',
  fontWeight: 'bold',
});

const content = `
스탠퍼드 대학교를 갓 졸업한 당신! 미래에 대한 꿈을 을 다니는 당신
미래에 대한 부푼 꿈을 안고 나를 위한 졸업 선물로 샌프란시스코 여행을 떠나게 됩니다 🥳
`;

export default function OverviewText() {
  return (
    <Container>
      <Title>Day1. In Sanfrancisco</Title>
      <p>{content}</p>
    </Container>
  );
}
