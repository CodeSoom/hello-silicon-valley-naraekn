import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div({
  marign: 0,
  padding: '0 2em',
  width: '100%',
});

const GotoTestButton = styled.button({
  height: '3em',
  width: '100%',
  border: 0,
  borderRadius: '2em',
  fontWeight: 'bold',
  padding: '.4em 1.4em',
  margin: '1em 0',
  backgroundColor: '#FFF',
  alignItems: 'center',
  outline: 'none',
  boxShadow: '0 5px 5px -5px rgba(0,0,0,.5)',
  '&:hover': {
    transition: '.5s',
    boxShadow: '0 15px 15px -15px rgba(0,0,0,.5)',
  },
});

const ContributorsButton = styled.button({
  height: '3em',
  width: '100%',
  border: '2px solid #FFF',
  borderRadius: '2em',
  fontWeight: 'bold',
  padding: '.4em 1.4em',
  margin: '1em 0',
  color: '#FFF',
  backgroundColor: 'transparent',
  alignItems: 'center',
  outline: 'none',
  boxShadow: '0 5px 5px -5px rgba(0,0,0,.5)',
  '&:hover': {
    transition: '.5s',
    boxShadow: '0 15px 15px -15px rgba(0,0,0,.5)',
  },
});

export default function HomeButtons({
  onClickTest, onClickContributors,
}) {
  return (
    <Container>
      <GotoTestButton
        onClick={onClickTest}
      >
        테스트 시작하기
      </GotoTestButton>
      <ContributorsButton
        onClick={onClickContributors}
      >
        만든 사람들
      </ContributorsButton>
    </Container>
  );
}
