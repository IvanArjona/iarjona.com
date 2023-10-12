import type { ImageMetadata } from 'astro';

export interface NavigationItem {
  name: string;
  href: string;
}

export type Navigation = Array<NavigationItem>;

export interface SocialItem {
  title: string;
  pack: string;
  icon: string;
  href: string;
}

export interface Image extends ImageMetadata {
  (): Promise<ImageDefault>;
}

interface ImageDefault {
  default: Image;
}

export interface Images {
  [name: string]: Image;
}

export interface MetaSEO {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string | URL;
  noindex?: boolean;
  nofollow?: boolean;
  ogTitle?: string;
  ogType?: string;
}
