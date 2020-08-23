import React from 'react';

import styled from '@emotion/styled';

import { Profile104 } from '../../assets/images';

const IndicatorContainer = styled.div({
  display: 'flex',
  padding: '.5em',
});

const Indicator = styled.div(({ inProgress }) => ({
  height: '.2em',
  flexGrow: 1,
  margin: '0 .2em',
  background: inProgress ? '#FFF' : '#DDD',
}));

const ProfileContainer = styled.div(({ isBackgroundDark }) => ({
  display: 'flex',
  padding: '.5em 1em',
  alignItems: 'center',
  fontSize: '1.1em',
  color: isBackgroundDark ? '#FFF' : '',
}));

const ProfileImage = styled.img({
  float: 'left',
  width: '3em',
  height: '3em',
  marginRight: '1em',
  borderRadius: '50%',
  background: 'rgba( 255, 255, 255, 0.7)',
  padding: '2.5px',
});

export default function ProfileBar({ isBackgroundDark }) {
  return (
    <>
      <IndicatorContainer>
        <Indicator inProgress />
        <Indicator inProgress={false} />
      </IndicatorContainer>
      <ProfileContainer
        isBackgroundDark={isBackgroundDark}
      >
        <ProfileImage src={Profile104} />
        What_is_your_company?
      </ProfileContainer>
    </>
  );
}
