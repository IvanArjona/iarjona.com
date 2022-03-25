import socials from '../data/socials';

const Socials: React.FC<{}> = () => {
  const socialLinks = socials.map(({ Icon, title, href }, index) => (
    <a
      href={href}
      key={href}
      title={title}
      target="_blank"
      rel="noreferrer"
      data-aos="zoom-in"
      data-aos-delay={`${index + 2}00`}
      data-aos-duration="500"
    >
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
