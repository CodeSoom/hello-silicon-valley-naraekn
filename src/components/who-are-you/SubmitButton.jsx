import React from 'react';

import styled from '@emotion/styled';

import { GradientButton } from '../../styles/who-are-you';

const Icon = styled.i({
  fontSize: '1em',
});

export default function SubmitButton({ onClick, disabled }) {
  return (
    <GradientButton
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      <div>
        <span>SUBMIT</span>
        <Icon className="material-icons">
          arrow_forward_ios
        </Icon>
      </div>
    </GradientButton>
  );
}
