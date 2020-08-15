import React from 'react';

import styled from '@emotion/styled';

import { ACCENT_COLOR } from '../../styles/constants';

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
  outline: 'none',
});

const ProfileImage = styled.img({
  float: 'left',
  width: '3em',
  height: '3em',
  marginRight: '1em',
  borderRadius: '50%',
});

const Icon = styled.i(({ selected }) => ({
  float: 'right',
  margin: 'auto 0 auto 1em',
  color: selected ? ACCENT_COLOR : '#5F5457',
}));

export default function AnswerButtons({
  options, profiles, selectedAnswer, handleClick,
}) {
  const isSelected = (id) => id === selectedAnswer;

  return (
    <>
      {
        options.map((option, index) => (
          <Container key={option.id}>
            <Button
              onClick={() => handleClick(option.id)}
            >
              <ProfileImage src={profiles[index]} />
              {option.title}
              {
                isSelected(option.id)
                  ? (
                    <Icon
                      className="material-icons"
                      selected={isSelected(option.id)}
                    >
                      favorite
                    </Icon>
                  )
                  : (
                    <Icon
                      className="material-icons"
                      selected={isSelected(option.id)}
                    >
                      favorite_border
                    </Icon>
                  )
              }

            </Button>
          </Container>
        ))
      }
    </>
  );
}
