import React from 'react';

import styled from '@emotion/styled';

import TitleWithEmoji from './TitleWithEmoji';
import ShareButtons from './ShareButtons';

import { companyLogos } from '../../assets/images';

const Container = styled.div({
  textAlign: 'center',
  backgroundColor: '#FFF',
  margin: '2em',
  borderRadius: '.5em',
  padding: '1.5em',
});

const Tag = styled.div({
  textAlign: 'center',
});

const Subtitle = styled.div({
  textAlign: 'center',
  margin: '2em 0 .5em',
  fontSize: '1.2em',
  fontWeight: 'bold',
});

const CompanyLogo = styled.img({
  display: 'block',
  margin: '1.8em auto',
  height: '6em',
  maxWidth: '80vw',
});

export default function ResultContent({ first, second, last }) {
  return (
    <Container>
      <TitleWithEmoji
        title="당신의_고양이는_바로!"
        emoji="🎉"
      />
      <CompanyLogo
        src={companyLogos[first.id]}
        alt=""
      />
      <Subtitle>{first.name}</Subtitle>
      <Subtitle>{first.subtitle}</Subtitle>
      <p>{first.description}</p>
      <TitleWithEmoji
        title="두번째로_잘어울리는_냥이"
        emoji="🥈"
      />
      <Tag>{second.tag}</Tag>
      <TitleWithEmoji
        title="나와제일_안맞는_냥이"
        emoji="👎"
      />
      <Tag>{last.tag}</Tag>
      <TitleWithEmoji
        title="공유하기"
        emoji="💡"
      />
      <ShareButtons />
    </Container>
  );
}
