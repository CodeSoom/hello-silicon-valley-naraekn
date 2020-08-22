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

const CompanyLogo = styled.img({
  display: 'block',
  margin: '1.5em auto',
  height: '8em',
  maxWidth: '60vw',
});

export default function ResultContent({ first, second, last }) {
  return (
    <Container>
      <TitleWithEmoji
        title="THIS_IS_YOUR_COMPANY!"
        emoji="🎉"
      />
      <CompanyLogo
        src={companyLogos[first.id]}
        alt=""
      />
      <p>{first.description}</p>
      <TitleWithEmoji
        title="Second_Fit_Company"
        emoji="🥈"
      />
      <Tag>{second.tag}</Tag>
      <TitleWithEmoji
        title="Worst_Fit_Company"
        emoji="👎"
      />
      <Tag>{last.tag}</Tag>
    </Container>
  );
}
