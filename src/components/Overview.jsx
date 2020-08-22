import React from 'react';

import ImageSlider from './who-are-you/ImageSlider';
import OverviewText from './who-are-you/OverviewText';
import TipsText from './who-are-you/TipsText';

import { FeedContent } from '../styles/who-are-you';

export default function Overview({
  content, images,
}) {
  const { title, explanation, tips } = content;

  return (
    <>
      <ImageSlider
        feeds={images}
      />
      <FeedContent>
        <OverviewText
          title={title}
          explanation={explanation}
        />
        <TipsText
          tips={tips}
        />
      </FeedContent>
    </>
  );
}
