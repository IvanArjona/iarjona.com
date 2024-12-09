import type { ImageMetadata } from 'astro';
import type { translations } from './i18n/translations';

export type Lang = keyof typeof translations;
export type TranslatedKey = keyof (typeof translations)[Lang];

export interface NavigationItem {
  name: TranslatedKey;
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
