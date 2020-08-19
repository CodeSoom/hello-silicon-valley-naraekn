import React from 'react';

import styled from '@emotion/styled';

import { FacebookText } from '../../assets/images';

const Company = styled.img({
  display: 'block',
  margin: '1.5em auto',
  padding: '.5em',
  height: '4em',
  backgroundColor: '#FFF',
  borderRadius: '.5em',
});

export default function CompanyTitle() {
  return (
    <>
      <Company
        src={FacebookText}
        alt=""
      />
    </>
  );
}
