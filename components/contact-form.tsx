import { useTranslation } from 'next-i18next';
import { MailIcon, PaperAirplaneIcon } from '@heroicons/react/solid';
import ContactFormInput from './contact-form-input';

const ContactForm: React.FC<{}> = () => {
  const { t } = useTranslation('common');
  // eslint-disable-next-line prefer-destructuring
  const email = process.env.email;

  return (
    <form
      action={`https://formsubmit.co/${email}`}
      method="POST"
      className="grid grid-cols-2 md:grid-cols-3 gap-8 m-8"
    >
      <div className="col-span-2 md:col-span-1 row-span-1 md:row-span-3 flex flex-col items-center justify-center gap-2">
        <MailIcon className="h-12 w-12" />
        <span className="text-sm tracking-wide">
          {t('email-me-at')}
        </span>
        <a
          href={`mailto:${email}`}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-purple-400 dark:text-yellow-400"
        >
          {email}
        </a>
      </div>
      <ContactFormInput name="name" label={t('name')} type="text" />
      <ContactFormInput name="email" label={t('email')} type="email" />
      <div className="col-span-2">
        <ContactFormInput name="_subject" label={t('subject')} type="text" minLength={8} />
      </div>
      <div className="col-span-2">
        <ContactFormInput input="textarea" name="message" label={t('message')} minLength={20} rows={10} />
      </div>
      <div className="col-span-2 md:col-span-3 text-right">
        <button
          type="submit"
          className="font-bold rounded-lg text-sm px-6 py-3 text-center
          text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300
          dark:bg-yellow-400 dark:hover:bg-yellow-700 dark:focus:ring-purple-900"
        >
          {t('send-message')}
          <PaperAirplaneIcon className="inline ml-2 h-6 w-6 rotate-90" />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
