import socials from '../data/socials';

const Footer: React.FC<{}> = () => {
  const socialLinks = socials.map(({ Icon, title, href }) => (
    <a href={href} key={href} title={title} target="_blank" rel="noreferrer" className="p-2">
      <Icon className="h-6 w-6 fill-white hover:fill-purple-500 transition-colors duration-300" />
    </a>
  ));

  return (
    <footer className="bg-gray-800 text-white font-mono px-6 py-8">
      <div className="container mx-auto flex justify-between place-items-center">
        <span>
          {process.env.fullName}
        </span>
        <div className="flex gap-4">
          {socialLinks}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
