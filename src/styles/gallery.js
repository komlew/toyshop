// @flow
import styled from 'styled-components';

import { SIZE, STYLE } from '../constants/styles';

type Props = {
  key: string,
  src: string,
  active: boolean,
  onClick: () => void,
  alt: string,
};

export const Gallery = styled.aside`
  width: 50%;
  float: right;
  margin: 0 0 ${SIZE.MARGIN.LIST} ${SIZE.MARGIN.LIST};
`;

export const GalleryMainImage = styled.img`
  width: 100%;
`;

export const GalleryThumbnails = styled.div`
  margin-top: ${SIZE.MARGIN.LIST};
`;

export const GalleryThumbnailImage = styled.img`
  width: 23.5%;
  margin: 0 2% 2% 0;
  box-shadow: ${(props: Props) =>
    props.active ? STYLE.SHADOW_BOLD : STYLE.SHADOW};
  opacity: ${(props: Props) =>
    props.active ? STYLE.OPACITY_BOLD : STYLE.OPACITY};
  &:nth-child(4n) {
    margin-right: 0;
  }
`;
