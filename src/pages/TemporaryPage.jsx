import React from 'react';

import styled from '@emotion/styled';

import TopBar from '../components/tests/TopBar';
import ImageSlider from '../components/tests/ImageSlider';
import OverviewText from '../components/tests/OverviewText';
import BottomBar from '../components/tests/BottomBar';
import FeedContent from '../components/tests/FeedContent';
import InformationText from '../components/tests/InformationText';

import {
  TOP_BAR_HEIGHT,
  BOTTOM_BAR_HEIGHT,
} from '../styles/constants';

const Container = styled.div({
  paddingTop: TOP_BAR_HEIGHT,
  paddingBottom: BOTTOM_BAR_HEIGHT,
  background: '#FFF',
});

// TODO: This page should be deleted later

export default function TemporaryPage() {
  return (
    <Container>
      <TopBar />
      <ImageSlider />
      <FeedContent>
        <OverviewText />
        <InformationText />
      </FeedContent>
      <BottomBar />
    </Container>
  );
}
