import React from 'react';

import styled from '@emotion/styled';

import {
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',
});

const ButtonWrapper = styled.div({
  margin: '.2em',
});

export default function ShareButtons() {
  const shareUrl = 'https://hellosiliconvalley.me';

  return (
    <Container>
      <ButtonWrapper>
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon
            logoFillColor="white"
            size={32}
            round
          />
        </FacebookShareButton>
      </ButtonWrapper>
      <ButtonWrapper>
        <FacebookMessengerShareButton url={shareUrl}>
          <FacebookMessengerIcon
            logoFillColor="white"
            size={32}
            round
          />
        </FacebookMessengerShareButton>
      </ButtonWrapper>
      <ButtonWrapper>
        <TwitterShareButton url={shareUrl}>
          <TwitterIcon
            logoFillColor="white"
            size={32}
            round
          />
        </TwitterShareButton>
      </ButtonWrapper>
    </Container>
  );
}
