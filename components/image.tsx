import NextImage, { ImageLoader, ImageLoaderProps, ImageProps } from 'next/image';
import { FC } from 'react';

const customImageLoader: ImageLoader = (props: ImageLoaderProps): string => {
  if (process.env.NODE_ENV === 'development') {
    return `${props.src}?width=${props.width}`;
  }

  const format = props.src.split('.').pop();
  if (format === 'svg') {
    return props.src;
  }

  const transformations = [
    `w_${props.width}`,
    `q_${props.quality || 'auto'}`,
    'c_limit',
  ].join(',');
  return `${props.config.path}${props.src}?tx=${transformations}`;
};

const Image: FC<ImageProps> = (props: ImageProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <NextImage loader={customImageLoader} {...props} />
);

export default Image;
