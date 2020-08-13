import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div({
  padding: '1em 0',
});

const Title = styled.div({
  fontSize: '1.2em',
  fontWeight: 'bold',
  color: '#007aff',
});

const ItemList = styled.ul({
  listStyleType: 'none',
  listStylePosition: 'outside',
});

const tmi = [
  `# 실리콘밸리는 미국 캘리포니아 주의 샌프란시스코 만을 둘러싼 지역으로,
  세계 최대의 기술 연구가 활발한 창업의 성지에요!`,
  '# 스탠포드 대학교는 실리콘밸리 기업에게 새롭고 젊은 피를 공급하는 대표적인 명문 대학이에요.',
];

export default function InformationText() {
  return (
    <Container>
      <Title>TMI</Title>
      <ItemList>
        { tmi.map((info) => (
          <li>{info}</li>
        ))}
      </ItemList>
    </Container>
  );
}
