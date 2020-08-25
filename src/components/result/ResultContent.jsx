import React from 'react';

import styled from '@emotion/styled';

import TitleWithEmoji from './TitleWithEmoji';

import { companyLogos } from '../../assets/images';

const Container = styled.div({
  backgroundColor: '#FFF',
  margin: '2em',
  borderRadius: '.5em',
  padding: '1.5em',
});

const Tag = styled.div({
  textAlign: 'center',
});

const Subtitle = styled.div({
  margin: '2em 0 .5em',
  fontSize: '.95em',
  fontWeight: 'bold',
});

const CompanyLogo = styled.img({
  display: 'block',
  margin: '1.8em auto',
  height: '6em',
  maxWidth: '60vw',
});

export default function ResultContent({ first, second, last }) {
  return (
    <Container>
      <TitleWithEmoji
        title="당신의_회사는_바로!"
        emoji="🎉"
      />
      <CompanyLogo
        src={companyLogos[first.id]}
        alt=""
      />
      <Subtitle>{first.subtitle}</Subtitle>
      <p>{first.description}</p>
      <TitleWithEmoji
        title="두번째로_잘어울리는_회사"
        emoji="🥈"
      />
      <Tag>{second.tag}</Tag>
      <TitleWithEmoji
        title="나와제일_안맞는_회사"
        emoji="👎"
      />
      <Tag>{last.tag}</Tag>
    </Container>
  );
}
