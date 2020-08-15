import React from 'react';

import styled from '@emotion/styled';

const Button = styled.button({
  display: 'flex',
  float: 'left',
  height: '3em',
  width: '8em',
  border: 0,
  borderRadius: '2em',
  fontWeight: 'bold',
  padding: '.4em 1.4em',
  backgroundColor: 'transparent',
  alignItems: 'center',
  justifyContent: 'space-around',
  outline: 'none',
  '&:hover': {
    color: '#FFF',
    backgroundColor: '#AAA',
    transition: '0.5s',
  },
});

const Icon = styled.i({
  fontSize: '1em',
});

export default function BackButton({ onClick }) {
  return (
    <Button
      type="button"
      onClick={onClick}
    >
      <Icon className="material-icons">
        arrow_back_ios
      </Icon>
      <span>BACK</span>
    </Button>
  );
}
