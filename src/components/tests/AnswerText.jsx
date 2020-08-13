import React from 'react';

import styled from '@emotion/styled';

import { ExampleImage1 } from '../../assets/images';

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

// TODO: If the user click button, show favorite icon colored with ACCENT_COLOR

const Icon = styled.i({
  float: 'right',
  margin: 'auto 0 auto 1em',
  color: '#5F5457',
});

// TODO: This should be removed later

const answers = [
  { id: 1, title: '자기 주관이 뚜렷하며 주도적으로 나를 리드하는, 똑소리 나는 프로페셔널' },
  { id: 2, title: '믿음직하고 성실하며 나를 위해 한 몸 바치는, 츤데레 진국 ' },
  { id: 3, title: '어딘가 모르게 끌리는 신비로운 분위기, 스타일리시한 멋쟁이' },
  { id: 4, title: '애정 어린 눈으로 나를 바라보는 애교쟁이, 다정다감 표현왕' },
];

export default function AnswerText() {
  return (
    <>
      {
        answers.map((answer) => (
          <Container key={answer.id}>
            <Button>
              <ProfileImage src={ExampleImage1} />
              {answer.title}
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
