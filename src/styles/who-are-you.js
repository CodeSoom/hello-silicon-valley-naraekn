import styled from '@emotion/styled';

import {
  TOP_BAR_HEIGHT,
  BOTTOM_BAR_HEIGHT,
  MAIN_GRADIENT_COLOR,
  GRAY_GRADIENT_COLOR,
} from './constants';

const FeedLayout = styled.div({
  paddingTop: TOP_BAR_HEIGHT,
  paddingBottom: BOTTOM_BAR_HEIGHT,
  background: '#FFF',
});

const FeedContent = styled.div({
  padding: '0 2em',
});

const GradientButton = styled.button(({ disabled }) => ({
  float: 'right',
  height: '3em',
  width: '8em',
  border: 0,
  borderRadius: '2em',
  color: '#333',
  fontWeight: 'bold',
  padding: '.4em',
  outline: 'none',
  backgroundImage: `linear-gradient(
    60deg, 
    ${disabled ? GRAY_GRADIENT_COLOR[0] : MAIN_GRADIENT_COLOR[0]}, 
    ${disabled ? GRAY_GRADIENT_COLOR[1] : MAIN_GRADIENT_COLOR[1]}
  )`,
  '& div': {
    display: 'flex',
    height: '100%',
    padding: '1em',
    borderRadius: '2em',
    backgroundColor: '#FFF',
    boxShadow: '0 0 0 1pt #FFF',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  '&:hover': {
    fontWeight: 'bold',
    boxShadow: 'none',
    color: '#FFF',
    transition: '0.5s',
    '& div': {
      backgroundColor: 'transparent',
    },
  },
}));

export {
  FeedLayout,
  FeedContent,
  GradientButton,
};
