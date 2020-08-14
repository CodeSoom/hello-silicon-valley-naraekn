import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div({
  padding: '1em 0',
});

const Title = styled.div({
  fontSize: '1.2em',
  fontWeight: 'bold',
  color: '#007aff',
});

const ItemList = styled.ul({
  listStyleType: 'none',
  listStylePosition: 'outside',
});

export default function TipsText({ tips }) {
  return (
    <Container>
      <Title>TMI</Title>
      <ItemList>
        {
          tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))
        }
      </ItemList>
    </Container>
  );
}
