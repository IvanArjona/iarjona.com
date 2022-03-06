import { useTranslation } from 'next-export-i18n';
import ContactForm from './contact-form';

const Contact: React.FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <div id="contact" className="py-28 bg-emerald-500 dark:bg-black">
      <div className="container mx-auto">
        <h2 className="text-3xl">
          {t('lets-taks')}
        </h2>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
