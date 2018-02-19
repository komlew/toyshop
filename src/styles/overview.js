// @flow
import styled from 'styled-components';

import { COLOR, SIZE, STYLE } from '../constants/styles';

export const ProductItem = styled.li`
  display: block;
  background: ${props =>
    props.active
      ? COLOR.BACKGROUND.LIST.ACTIVE
      : COLOR.BACKGROUND.LIST.DEFAULT};
  box-shadow: ${STYLE.SHADOW};
  margin: 0;
  margin-bottom: ${SIZE.MARGIN.LIST};
  border-radius: ${STYLE.RADIUS};
  &:hover,
  &:focus {
    background: ${props =>
      props.active
        ? COLOR.BACKGROUND.LIST.ACTIVE
        : COLOR.BACKGROUND.LIST.FOCUSED};
  }
  &:last-child {
    margin-bottom: ${STYLE.RADIUS};
  }
  a {
    text-decoration: none;
    overflow: hidden;
    display: block;
    padding: ${SIZE.PADDING.LIST};
  }
`;

export const ProductItemImage = styled.img`
  width: ${SIZE.WIDTH.LIST_IMAGE};
  margin: -${SIZE.PADDING.LIST} ${SIZE.MARGIN.LIST} -${SIZE.PADDING.LIST} -${SIZE.PADDING.LIST};
  float: left;
`;

export const ProductItemTitle = styled.div`
  margin-bottom: ${SIZE.PADDING.LIST};
`;

export const ProductItemPrice = styled.div`
  &:before {
    content: attr(data-unit);
  }
`;
