import { MailIcon } from '@heroicons/react/solid';
import { ISocialItem } from '../types/index';
import LinkedinIcon from '../assets/icons/linkedin.svg';
import GithubIcon from '../assets/icons/github.svg';

const socials: ISocialItem[] = [
  { Icon: MailIcon, title: 'Email', href: `mailto:${process.env.email}` },
  { Icon: GithubIcon, title: 'GitHub', href: process.env.github as string },
  { Icon: LinkedinIcon, title: 'LinkedIn', href: process.env.linkedin as string },
];

export default socials;
