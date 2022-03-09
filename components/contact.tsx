import { useTranslation } from 'next-i18next';
import ContactForm from './contact-form';
import Header from './Header';

const Contact: React.FC<{}> = () => {
  const { t } = useTranslation('common');

  return (
    <div id="contact" className="py-28 bg-emerald-500 dark:bg-black">
      <div className="container mx-auto">
        <Header>
          {t('lets-taks')}
        </Header>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
