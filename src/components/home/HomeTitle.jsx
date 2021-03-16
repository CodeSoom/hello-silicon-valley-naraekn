import React from 'react';

import styled from '@emotion/styled';

import { WhiteLogoImage } from '../../assets/images';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  padding: '2em',
});

const Logo = styled.img({
  height: '4.2em',
  maxWidth: '100%',
  margin: '1em auto',
});

const Text = styled.div({
  textAlign: 'center',
  color: '#FFF',
});

export default function HomeTitle() {
  return (
    <Container>
      {
      <Logo
        src={WhiteLogoImage}
        alt=""
      />
      
    }
      <Text>만약에 당신이</Text>
      <Text>고양이로 태어난다면 어떨까요?</Text>
    </Container>
  );
}
