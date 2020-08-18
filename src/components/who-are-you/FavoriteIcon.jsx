import React from 'react';

import styled from '@emotion/styled';

import { ACCENT_COLOR } from '../../styles/constants';

const Icon = styled.i(({ selected }) => ({
  float: 'right',
  margin: 'auto 0 auto 1em',
  color: selected ? ACCENT_COLOR : '#5F5457',
}));

export default function FavoriteIcon({ isSelected }) {
  return (
    <>
      {
        isSelected
          ? (
            <Icon
              className="material-icons"
              selected={isSelected}
            >
              favorite
            </Icon>
          )
          : (
            <Icon
              className="material-icons"
              selected={isSelected}
            >
              favorite_border
            </Icon>
          )
      }
    </>
  );
}
