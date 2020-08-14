import React from 'react';

import styled from '@emotion/styled';

import { MAIN_GRADIENT_COLOR } from '../../styles/constants';

const GradientButton = styled.button({
  float: 'right',
  height: '3em',
  width: '8em',
  border: 0,
  borderRadius: '2em',
  color: '#333',
  fontWeight: 'bold',
  padding: '.4em',
  backgroundImage: `linear-gradient(
    60deg, 
    ${MAIN_GRADIENT_COLOR[0]}, 
    ${MAIN_GRADIENT_COLOR[1]}
  )`,
  '& div': {
    display: 'flex',
    height: '100%',
    padding: '1em',
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

const Icon = styled.i({
  fontSize: '1em',
});

export default function NextButton({ onClick }) {
  return (
    <GradientButton
      type="button"
      onClick={onClick}
    >
      <div>
        <span>NEXT</span>
        <Icon className="material-icons">
          arrow_forward_ios
        </Icon>
      </div>
    </GradientButton>
  );
}
