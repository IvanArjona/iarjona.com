import { useTranslation } from 'next-i18next';
import ContactForm from './contact-form';

const Contact: React.FC<{}> = () => {
  const { t } = useTranslation('common');

  return (
    <div id="contact" className="py-28">
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
