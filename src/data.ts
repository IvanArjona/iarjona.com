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
    pack: 'tabler',
    icon: 'mail',
    href: `mailto:${config.email}`,
  },
  {
    title: 'GitHub',
    pack: 'tabler',
    icon: 'brand-github',
    href: config.github,
  },
  {
    title: 'LinkedIn',
    pack: 'tabler',
    icon: 'brand-linkedin',
    href: config.linkedIn,
  },
];
