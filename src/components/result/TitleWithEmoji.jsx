import React from 'react';

import styled from '@emotion/styled';

const Title = styled.div({
  fontFamily: 'Source Code Pro',
  fontWeight: 'bold',
  textAlign: 'center',
  paddingBottom: '1em',
  margin: '1em 0',
  borderBottom: '.5px solid #E8E8E8',
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
