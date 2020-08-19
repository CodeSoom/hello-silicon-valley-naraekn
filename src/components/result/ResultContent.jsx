import React from 'react';

import styled from '@emotion/styled';

import { FacebookLogo } from '../../assets/images';

const Container = styled.div({
  backgroundColor: '#FFF',
  margin: '2em',
  borderRadius: '.5em',
  padding: '1.5em',
});

const Title = styled.div({
  fontFamily: 'Source Code Pro',
  fontSize: '1.2em',
  textAlign: 'center',
  padding: '.3em',
  margin: '.5em 0',
  borderBottom: '.5px solid #E8E8E8',
});

const Content = styled.p({

});

const Tag = styled.div({
  textAlign: 'center',
});

const CompanyLogo = styled.img({
  display: 'block',
  margin: '1.5em auto',
  height: '8em',
});

// TODO: These will be removed later
const explanation = `
  세상을 바꾸고싶어하고 사람들과 화합을 좋아하며, 
  풍부한 아이디어를 가진 당신은
  실패에 관대하고 도전하는걸 좋아하는 당신. 
  사람들과 함께 소통하고 일하는데 적합하여 
  누군가의 멘토가 되기에 참 알맞은 사람입니다.`;
const secondFitCompanyTag = '신비주의_비밀주의인 @Apple';
const lastFitCompanyTag = '신비주의_비밀주의인 @Apple';

export default function ResultContainer() {
  const firstCompanyTitle = '🎉THIS_IS_YOUR_COMPANY! 🎉';
  const secondCompanyTitle = '🥈Second_Fit_Company🥈';
  const lastCompanyTitle = '👎Worst_Fit_Company👎';

  // TODO: These codes will be modified later

  return (
    <Container>
      <Title>{firstCompanyTitle}</Title>
      <CompanyLogo src={FacebookLogo} alt="" />
      <Content>{explanation}</Content>
      <Title>{secondCompanyTitle}</Title>
      <Tag>{secondFitCompanyTag}</Tag>
      <Title>{lastCompanyTitle}</Title>
      <Tag>{lastFitCompanyTag}</Tag>
    </Container>
  );
}
