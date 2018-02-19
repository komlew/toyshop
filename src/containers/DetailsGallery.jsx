// @flow
import React, { PureComponent } from 'react';

import {
  Gallery,
  GalleryMainImage,
  GalleryThumbnails,
  GalleryThumbnailImage,
} from '../styles';
import type { ProductImage } from '../types';

type Props = {
  images: Array<ProductImage>,
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

  onClick(index: number) {
    this.setState({
      currentImageIndex: index,
    });
  }

  render() {
    const { images } = this.props;
    const currentImageSrc = images[this.state.currentImageIndex].original;
    return (
      <Gallery>
        <GalleryMainImage src={currentImageSrc} alt="" />
        <GalleryThumbnails>
          {this.props.images.map((image, index) => (
            <GalleryThumbnailImage
              key={`${image.thumb}${index}`}
              src={image.thumb}
              active={this.state.currentImageIndex === index}
              onClick={() => this.onClick(index)}
              alt=""
            />
          ))}
        </GalleryThumbnails>
      </Gallery>
    );
  }
}

export default DetailsGallery;
