import type { ImageMetadata } from 'astro';

export interface NavigationItem {
  name: string;
  href: string;
}

export type Navigation = Array<NavigationItem>;

export interface SocialItem {
  title: string;
  icon: string;
  href: string;
}

export interface MetaSEO {
  title?: string;
  description?: string;
  image?: ImageMetadata;
  noindex?: boolean;
  nofollow?: boolean;
}
