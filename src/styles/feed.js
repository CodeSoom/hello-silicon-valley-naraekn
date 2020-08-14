import styled from '@emotion/styled';

import {
  TOP_BAR_HEIGHT,
  BOTTOM_BAR_HEIGHT,
} from './constants';

const FeedContainer = styled.div({
  paddingTop: TOP_BAR_HEIGHT,
  paddingBottom: BOTTOM_BAR_HEIGHT,
  background: '#FFF',
});

const FeedContent = styled.div({
  padding: '0 2em',
});

export {
  FeedContainer,
  FeedContent,
};
