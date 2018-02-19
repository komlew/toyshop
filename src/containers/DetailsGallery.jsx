// @flow
import React, { PureComponent } from 'react';
import autobind from 'autobind-decorator';

import { Gallery, GalleryMainImage, GalleryThumbnails } from '../styles';
import type { ProductImage } from '../types';

import DetailsGalleryThumbnail from './DetailsGalleryThumbnail';

type Props = {
  images: Array<ProductImage>,
  id: number,
};

type State = {
  currentImageIndex: number,
};

class DetailsGallery extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
    };
  }

  componentWillReceiveProps(newProps: Props) {
    const sameProps = Object.is(this.props, newProps);
    if (!sameProps) {
      this.setState({
        currentImageIndex: 0,
      });
    }
  }

  @autobind
  onClick(index: number) {
    this.setState({
      currentImageIndex: index,
    });
  }

  render() {
    const { images, id } = this.props;
    const currentImageSrc = images[this.state.currentImageIndex].original;
    return (
      <Gallery>
        <GalleryMainImage src={currentImageSrc} alt="" />
        <GalleryThumbnails>
          {this.props.images.map((image, index) => (
            <DetailsGalleryThumbnail
              key={`${image.thumb}-${index}-${id}`}
              src={image.thumb}
              active={this.state.currentImageIndex === index}
              index={index}
              onClick={this.onClick}
              alt=""
            />
          ))}
        </GalleryThumbnails>
      </Gallery>
    );
  }
}

export default DetailsGallery;
