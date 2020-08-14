import React from 'react';

import styled from '@emotion/styled';

import Slider from 'react-slick';

const Container = styled.div({
  marginBottom: '30px',
});

export default function ImageSlider({ feeds }) {
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
          feeds.map((feed) => (
            <img key={feed} src={feed} alt="" />
          ))
        }
      </Slider>
    </Container>
  );
}
