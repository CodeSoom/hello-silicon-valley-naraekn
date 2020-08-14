import React from 'react';

import ImageSlider from './who-are-you/ImageSlider';
import OverviewText from './who-are-you/OverviewText';
import TipsText from './who-are-you/TipsText';

import { FeedContent } from '../styles/feed';

export default function Overview({
  content, images,
}) {
  const { title, explanation, tips } = content;

  const { feeds } = images;

  return (
    <>
      <ImageSlider
        feeds={feeds}
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
