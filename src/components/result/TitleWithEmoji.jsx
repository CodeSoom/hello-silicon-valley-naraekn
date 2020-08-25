import React from 'react';

import styled from '@emotion/styled';

const Title = styled.div({
  margin: '1.2em 0',
  paddingBottom: '.8em',
  borderBottom: '.5px solid #E8E8E8',
  fontSize: '1.1em',
  fontWeight: 'bold',
  textAlign: 'center',
});

export default function TitleWithEmoji({ title, emoji }) {
  return (
    <Title>
      <span role="img" aria-label={title}>
        { emoji }
      </span>
      { title }
      <span role="img" aria-label={title}>
        { emoji }
      </span>
    </Title>
  );
}
