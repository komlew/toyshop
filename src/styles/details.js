// @flow
import styled from 'styled-components';

import { COLOR, SIZE } from '../constants/styles';

export const DetailsClose = styled.div`
  display: none;
  position: absolute;
  top: ${SIZE.PADDING.LIST};
  right: ${SIZE.PADDING.LIST};
  z-index: 1;
  a {
    display: block;
    width: 7.5vmin;
    height: 7.5vmin;
    text-align: center;
    text-decoration: none;
    font-weight: 900;
    color: ${COLOR.TEXT.DEFAULT};
    &::before {
      content: '×';
      font-size: 12vmin;
      line-height: 5.5vmin;
    }
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 2) {
    display: block;
  }
`;

export const DetailsTitle = styled.h1`
  display: block;
  margin: 0 0 ${SIZE.PADDING.LIST};
`;

export const DetailsPrice = styled.div`
  margin-bottom: 1em;
  &:before {
    content: attr(data-unit);
  }
`;

export const DetailsDescription = styled.div`
  font-size: 0.8em;
  margin-bottom: 1em;
`;

export const DetailsSpecification = styled.div`
  font-size: 0.7em;
`;
