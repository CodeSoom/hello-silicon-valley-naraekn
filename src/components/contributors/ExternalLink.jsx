import React from 'react';

import styled from '@emotion/styled';

import { MAIN_GRADIENT_COLOR } from '../../styles/constants';

const GradientLink = styled.a({
  height: '2.5em',
  width: '100%',
  border: 0,
  borderRadius: '2em',
  color: '#333',
  fontWeight: 'bold',
  marginTop: '1em',
  padding: '.3em',
  outline: 'none',
  backgroundImage: `linear-gradient(
    60deg, 
    ${MAIN_GRADIENT_COLOR[1]}, 
    ${MAIN_GRADIENT_COLOR[0]}
  )`,
  textDecoration: 'none',
  '& div': {
    display: 'flex',
    height: '100%',
    padding: '.5em',
    borderRadius: '2em',
    backgroundColor: '#FFF',
    boxShadow: '0 0 0 1pt #FFF',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  '&:hover': {
    fontWeight: 'bold',
    boxShadow: 'none',
    color: '#FFF',
    transition: '0.5s',
    '& div': {
      backgroundColor: 'transparent',
    },
  },
});

export default function ExternalLink({ link }) {
  return (
    <GradientLink
      href={link.url}
    >
      <div>{link.title}</div>
    </GradientLink>
  );
}
