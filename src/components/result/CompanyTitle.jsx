import React from 'react';

import styled from '@emotion/styled';

import { companyTitles } from '../../assets/images';

const Company = styled.img({
  display: 'block',
  margin: '1.5em auto',
  padding: '.5em',
  height: '3em',
  maxWidth: '80vw',
  backgroundColor: '#FFF',
  borderRadius: '.5em',
});

export default function CompanyTitle({ id }) {
  return (
    <>
      <Company
        src={companyTitles[id]}
        alt=""
      />
    </>
  );
}
