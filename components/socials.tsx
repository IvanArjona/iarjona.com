import { MailIcon } from '@heroicons/react/solid';
import LinkedinIcon from '../assets/icons/linkedin.svg';
import GithubIcon from '../assets/icons/github.svg';

const socials = [
  { Icon: MailIcon, title: 'Email', href: 'mailto:ivan@iarjona.com' },
  { Icon: GithubIcon, title: 'GitHub', href: 'https://github.com/IvanArjona' },
  { Icon: LinkedinIcon, title: 'LinkedIn', href: 'https://www.linkedin.com/in/ivan-arjona/' },
];

const Socials: React.FC<{}> = () => {
  const socialLinks = socials.map(({ Icon, title, href }) => (
    <a href={href} key={href} title={title} target="_blank" rel="noreferrer">
      <Icon className="h-10 w-10 2xl:h-14 2xl:w-14 m-2 fill-white hover:fill-purple-500 transition-colors duration-300" />
    </a>
  ));

  return (
    <div className="short:absolute short:right-4 short:bottom-8 flex short:flex-col justify-center gap-2 pt-2 text-red-500">
      {socialLinks}
    </div>
  );
};

export default Socials;
