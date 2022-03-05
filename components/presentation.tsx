import { useTranslation } from 'next-i18next';
import Photo from '../assets/images/photo.jpg';
import Socials from './socials';
import Image from './image';

const Presentation: React.FC<{}> = () => {
  const { t } = useTranslation('common');

  return (
    <div className="w-screen grid sm:grid-cols-2 gap-8">
      <div className="col-start-0 mx-auto">
        <div className="w-64 xl:w-72 2xl:w-80 shadow-[1rem_-1rem] shadow-purple-500">
          <Image src={Photo} layout="intrinsic" unoptimized />
        </div>
      </div>
      <section className="-mt-20 sm:mt-auto z-10 sm:order-first sm:row-span-2 w-min mx-auto flex flex-col gap-2 md:gap-4 text-white">
        <h1 className="uppercase font-bold text-5xl md:text-7xl xl:text-9xl">
          {process.env.name}
        </h1>
        <div>----</div>
        <h2 className="font-mono md:text-xl lg:text-2xl xl:text-3xl">
          <span className="block">{t('title-1')}</span>
          <span className="ml-4">{t('title-2')}</span>
        </h2>
      </section>
      <div className="">
        <Socials />
      </div>
    </div>
  );
};

export default Presentation;
