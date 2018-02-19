// @flow
import styled from 'styled-components';

import { COLOR, SIZE, STYLE } from '../constants/styles';

export const MainContainer = styled.section`
  margin: ${SIZE.MARGIN.PAGE};
  margin-top: calc(${SIZE.TEXT.NAVBAR} + ${SIZE.MARGIN.PAGE});
  @media only screen and (min-device-width: 320px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 2) {
    margin: ${SIZE.MARGIN.LIST};
    margin-top: calc(${SIZE.TEXT.NAVBAR} + ${SIZE.MARGIN.LIST});
  }
  &:empty {
    margin: 0;
    text-align: center;
    ::before {
      content: 'Loading...';
      line-height: 100vh;
      font-size: ${SIZE.TEXT.MENU_ICON};
      color: ${COLOR.TEXT.FOCUSED};
    }
  }
`;

export const Overview = styled.ul`
  margin: 0;
  padding: 0;
  width: ${SIZE.WIDTH.LEFT_COLUMN};
  overflow-y: auto;
  max-height: calc(100vh - ${SIZE.MARGIN.PAGE} * 2);
  float: left;
  &::before {
    content: '↜ select an item in the list to see the details';
    position: absolute;
    left: calc(${SIZE.WIDTH.LEFT_COLUMN} + ${SIZE.MARGIN.PAGE} * 2);
    color: ${COLOR.TEXT.FOCUSED};
    z-index: -1;
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 100%;
    &::before {
      display: none;
    }
  }
`;

export const Details = styled.aside`
  width: calc(
    100vw - ${SIZE.WIDTH.LEFT_COLUMN} - ${SIZE.MARGIN.PAGE} * 2 -
      ${SIZE.MARGIN.LIST}
  );
  background: ${COLOR.BACKGROUND.EMPTY};
  margin-left: calc(${SIZE.WIDTH.LEFT_COLUMN} + ${SIZE.MARGIN.LIST});
  padding: ${SIZE.PADDING.LIST};
  box-shadow: ${STYLE.SHADOW};
  box-sizing: border-box;
  overflow: hidden;
  @media only screen and (min-device-width: 320px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 2) {
    width: calc(100% - ${SIZE.MARGIN.LIST} * 2);
    margin: 0 0 ${SIZE.MARGIN.PAGE};
    position: absolute;
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${COLOR.OVERLAY};
      z-index: -1;
    }
  }
`;

export const Navbar = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${SIZE.TEXT.NAVBAR};
  line-height: ${SIZE.TEXT.NAVBAR};
  background: ${COLOR.BACKGROUND.NAVBAR};
  text-align: center;
  color: ${COLOR.TEXT.NAVBAR};
  user-select: none;
  &::before {
    content: '\\2630';
    position: absolute;
    font-size: ${SIZE.TEXT.MENU_ICON};
    left: ${SIZE.MARGIN.PAGE};
  }
  &::after {
    content: '\\1F464';
    position: absolute;
    font-size: 1.8rem;
    right: ${SIZE.MARGIN.PAGE};
    line-height: 1.7em;
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 2) {
    z-index: -1;
    &::before {
      left: ${SIZE.MARGIN.LIST};
    }
    &::after {
      right: ${SIZE.MARGIN.LIST};
    }
  }
`;
