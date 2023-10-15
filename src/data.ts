import config from './config';
import type { Navigation, SocialItem } from './types';

export const navigation: Navigation = [
  { name: 'experience', href: '#experience' },
  { name: 'projects', href: '#projects' },
  { name: 'skills', href: '#skills' },
  { name: 'contact', href: '#contact' },
];

export const socials: SocialItem[] = [
  {
    title: 'Email',
    icon: 'tabler:mail',
    href: `mailto:${config.email}`,
  },
  {
    title: 'GitHub',
    icon: 'tabler:brand-github',
    href: config.github,
  },
  {
    title: 'LinkedIn',
    icon: 'tabler:brand-linkedin',
    href: config.linkedIn,
  },
];
