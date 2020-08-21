import React from 'react';

import styled from '@emotion/styled';

import { companyLogos } from '../../assets/images';

const Container = styled.div({
  backgroundColor: '#FFF',
  margin: '2em',
  borderRadius: '.5em',
  padding: '1.5em',
});

const Title = styled.div({
  fontFamily: 'Source Code Pro',
  fontWeight: 'bold',
  textAlign: 'center',
  padding: '.3em',
  margin: '.5em 0',
  borderBottom: '.5px solid #E8E8E8',
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
  const firstTitle = '🎉THIS_IS_YOUR_COMPANY!🎉';
  const secondTitle = '🥈Second_Fit_Company🥈';
  const lastTitle = '👎Worst_Fit_Company👎';

  return (
    <Container>
      <Title>{firstTitle}</Title>
      <CompanyLogo src={companyLogos[first.id]} alt="" />
      <p>{first.description}</p>
      <Title>{secondTitle}</Title>
      <Tag>{second.tag}</Tag>
      <Title>{lastTitle}</Title>
      <Tag>{last.tag}</Tag>
    </Container>
  );
}
