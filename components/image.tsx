import NextImage, { ImageLoader, ImageLoaderProps, ImageProps } from 'next/image';
import { FC } from 'react';

const customImageLoader: ImageLoader = (props: ImageLoaderProps): string => props.src;

const Image: FC<ImageProps> = (props: ImageProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <NextImage loader={customImageLoader} {...props} />
);

export default Image;
