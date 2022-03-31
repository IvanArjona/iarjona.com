/* eslint-disable @next/next/no-img-element */
import { useTranslation } from 'next-i18next';
import Image from './image';
import Socials from './socials';

const Presentation: React.FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <div className="w-screen grid sm:grid-cols-2 gap-8">
      <div className="col-start-0 mx-auto" data-aos="fade-left">
        <div className="h-64 w-64 xl:h-72 xl:w-72 2xl:h-80 2xl:w-80 shadow-[1rem_-1rem] shadow-purple-500 relative">
          <Image src="/images/photo.jpg" alt={process.env.name} layout="fill" />
        </div>
      </div>
      <section
        className="-mt-20 sm:mt-auto z-10 sm:order-first sm:row-span-2 w-min mx-auto flex flex-col gap-2 md:gap-4"
        data-aos="fade-right"
        data-aos-duration="800"
      >
        <h1 className="uppercase font-bold text-5xl md:text-7xl xl:text-9xl">
          {process.env.name}
        </h1>
        <div>
          <span className="block bg-purple-500 h-1 w-16 md:w-28 rounded-lg ml-2" />
          <span className="block bg-purple-500 h-1 w-16 md:w-28 rounded-lg mt-1 ml-14 md:ml-24" />
        </div>
        <h2 className="font-mono md:text-xl lg:text-2xl xl:text-3xl">
          <span
            className="block"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="700"
          >
            {t('title-1')}
          </span>
          <span
            className="ml-4"
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-duration="900"
          >
            {t('title-2')}
          </span>
        </h2>
      </section>
      <Socials />
    </div>
  );
};

export default Presentation;
