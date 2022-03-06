import { useTranslation } from 'next-export-i18n';
import ContactForm from './contact-form';
import Header from './Header';

const Contact: React.FC<{}> = () => {
  const { t } = useTranslation();

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
