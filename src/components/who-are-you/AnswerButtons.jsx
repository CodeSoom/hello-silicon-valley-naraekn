import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div({
  padding: '2em',
  borderBottom: '.5px solid #F5F5F5',
});

const Button = styled.button({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  textAlign: 'left',
  fontSize: '1em',
  borderColor: 'transparent',
  backgroundColor: 'transparent',
});

const ProfileImage = styled.img({
  float: 'left',
  width: '3em',
  height: '3em',
  marginRight: '1em',
  borderRadius: '50%',
});

// TODO: If the user click button,
// show favorite icon colored with ACCENT_COLOR

const Icon = styled.i({
  float: 'right',
  margin: 'auto 0 auto 1em',
  color: '#5F5457',
});

export default function AnswerButtons({
  options, profiles, handleClick,
}) {
  return (
    <>
      {
        options.map(({ id, title }, index) => (
          <Container key={id}>
            <Button onClick={handleClick}>
              <ProfileImage src={profiles[index]} />
              {title}
              <Icon className="material-icons">
                favorite_border
              </Icon>
            </Button>
          </Container>
        ))
      }
    </>
  );
}
