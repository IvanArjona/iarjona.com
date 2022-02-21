import { MailIcon } from '@heroicons/react/solid';
import LinkedinIcon from '../../assets/icons/linkedin.svg';
import GithubIcon from '../../assets/icons/github.svg';

const socials = [
  { Icon: MailIcon, title: 'Email', href: 'mailto:ivan@iarjona.com' },
  { Icon: GithubIcon, title: 'GitHub', href: 'https://github.com/IvanArjona' },
  { Icon: LinkedinIcon, title: 'LinkedIn', href: 'https://www.linkedin.com/in/ivan-arjona/' },
];

const MobileMenuSocial: React.FC<{}> = () => {
  const socialLinks = socials.map(({ Icon, title, href }) => (
    <a href={href} key={href} title={title} target="_blank" rel="noreferrer">
      <Icon className="h-6 w-6 m-2 fill-gray-700 dark:fill-gray-200 hover:fill-blue-500 dark:hover:fill-blue-500 transition-colors duration-300" />
    </a>
  ));

  return (
    <div className="bg-gray-100 dark:bg-gray-800 scale-100 w-full items-center p-12 text-center">
      <span className="uppercase text-xs text-gray-500 dark:text-gray-400">Get in touch</span>
      <div className="flex justify-center gap-2 pt-2 text-red-500">
        {socialLinks}
      </div>
    </div>
  );
};

export default MobileMenuSocial;
