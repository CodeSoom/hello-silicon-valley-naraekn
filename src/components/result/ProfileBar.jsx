import React from 'react';

import styled from '@emotion/styled';

import { ExampleImage1 } from '../../assets/images';

import { MAIN_GRADIENT_COLOR } from '../../styles/constants';

const IndicatorContainer = styled.div({
  display: 'flex',
  padding: '.5em',
});

const Indicator = styled.div(({ inProgress }) => ({
  height: '.2em',
  flexGrow: 1,
  margin: '0 .2em',
  background: inProgress ? 'white' : '#DDD',
}));

const ProfileContainer = styled.div({
  display: 'flex',
  padding: '.5em 1em',
  alignItems: 'center',
  fontSize: '1.3em',
});

const ProfileImage = styled.img({
  float: 'left',
  width: '3em',
  height: '3em',
  marginRight: '1em',
  borderRadius: '50%',
  background: `linear-gradient(
    60deg,
    ${MAIN_GRADIENT_COLOR[0]},
    ${MAIN_GRADIENT_COLOR[1]}
  )`,
  padding: '2px',
});

// TODO: These codes will be modified later

export default function ProfileBar() {
  return (
    <>
      <IndicatorContainer>
        <Indicator inProgress />
        <Indicator inProgress={false} />
      </IndicatorContainer>
      <ProfileContainer>
        <ProfileImage src={ExampleImage1} />
        What_is_your_company?
      </ProfileContainer>
    </>
  );
}
