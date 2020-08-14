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

export default function OverviewText({ title, explanation }) {
  return (
    <Container>
      <Title>{ title }</Title>
      <p>{ explanation }</p>
    </Container>
  );
}
