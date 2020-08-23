import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  margin: '2em',
  padding: '2em',
  borderRadius: '.5em',
  boxShadow: '0 8px 8px -8px rgba(0,0,0,.5)',
});

const SpecialText = styled.div({
  marginBottom: '.5em',
  paddingBottom: '.8em',
  width: '100%',
  borderBottom: '.5px solid #FFF',
  fontFamily: 'Source Code Pro',
  fontWeight: 'bold',
  textAlign: 'center',
});

const Tag = styled.div({
  margin: '.5em 0',
});

export default function SpecialContributors({ contributors }) {
  return (
    <Container>
      <SpecialText>
        <span role="img" aria-label="stars">✨</span>
        Special Thanks To
        <span role="img" aria-label="stars">✨</span>
      </SpecialText>
      {
        contributors.map((contributor) => (
          <Tag key={contributor.id}>
            {contributor.tag}
          </Tag>
        ))
      }
    </Container>
  );
}
