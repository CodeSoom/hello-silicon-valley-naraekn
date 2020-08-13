import React from 'react';

import styled from '@emotion/styled';

import Slider from 'react-slick';

import {
  ExampleImage1,
  ExampleImage2,
  ExampleImage3,
  ExampleImage4,
} from '../../assets/images';

const Container = styled.div({
  marginBottom: '30px',
});

export default function ImageSlider() {
  const images = [
    ExampleImage1,
    ExampleImage2,
    ExampleImage3,
    ExampleImage4,
  ];

  return (
    <Container>
      <Slider
        infinite
        dots
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
      >
        {
          images.map((image) => (
            <img key={image} src={image} alt="" />
          ))
        }
      </Slider>
    </Container>
  );
}
