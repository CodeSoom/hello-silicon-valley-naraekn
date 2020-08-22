import styled from '@emotion/styled';

import { HOME_GRADIENT_COLOR } from './constants';

const Container = styled.div({
  width: '100%',
  margin: 0,
  padding: '0 0 2em 0',
  backgroundImage: `linear-gradient(
    60deg,
    ${HOME_GRADIENT_COLOR[0]}, 
    ${HOME_GRADIENT_COLOR[1]}
  )`,
  backgroundAttachment: 'fixed',
});

export default Container;
