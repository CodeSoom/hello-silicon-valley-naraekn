import React from 'react';

import styled from '@emotion/styled';

import FavoriteIcon from './FavoriteIcon';

const Container = styled.div(({ isLast }) => ({
  padding: '2em',
  borderBottom: isLast ? '' : '.5px solid #D8D8D8',
}));

const Button = styled.button({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  fontSize: '1em',
  borderColor: 'transparent',
  backgroundColor: 'transparent',
  outline: 'none',
});

const ProfileImage = styled.img({
  float: 'left',
  width: '3em',
  height: '3em',
  marginRight: '1em',
  borderRadius: '50%',
});

const AnswerText = styled.div({
  flexGrow: 1,
  textAlign: 'left',
});

export default function AnswerButtons({
  options, profiles, selectedAnswer, onClick,
}) {
  const isSelected = (id) => id === selectedAnswer;

  const isLast = (id) => id === 4;

  return (
    <>
      {
        options.map((option, index) => (
          <Container
            key={option.id}
            isLast={isLast(option.id)}
          >
            <Button
              onClick={() => onClick(option.id)}
            >
              <ProfileImage src={profiles[index]} />
              <AnswerText>{option.title}</AnswerText>
              <FavoriteIcon isSelected={isSelected(option.id)} />
            </Button>
          </Container>
        ))
      }
    </>
  );
}
