// @flow
import React, { PureComponent } from 'react';
import autobind from 'autobind-decorator';

import { GalleryThumbnailImage } from '../styles';

type Props = {
  src: string,
  active: boolean,
  index: number,
  onClick: (index: number) => void,
  alt: string,
};

class DetailsGalleryThumbnail extends PureComponent<Props> {
  @autobind
  onClick() {
    this.props.onClick(this.props.index);
  }

  render() {
    return (
      <GalleryThumbnailImage
        src={this.props.src}
        active={this.props.active}
        onClick={this.onClick}
        alt={this.props.alt}
      />
    );
  }
}

export default DetailsGalleryThumbnail;
