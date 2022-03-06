import { useTranslation, useSelectedLanguage } from 'next-export-i18n';
import Link from 'next/link';

const LocaleSwitch: React.FC<{}> = () => {
  const { t } = useTranslation();
  const { lang } = useSelectedLanguage();
  // eslint-disable-next-line prefer-destructuring
  const locales = (process.env.locales as string).split(',');

  if (!locales) {
    return null;
  }

  const localeLinks = locales.map((locale: string) => (
    <Link
      key={locale}
      href={`?lang=${locale}`}
      locale={locale}
    >
      <a
        title={t(`locale-${locale}`)}
        className={`uppercase ${locale === lang ? 'underline' : ''}`}
      >
        {locale}
      </a>
    </Link>
  ));

  return (
    <div className="text-sm mr-4 flex gap-1">
      {localeLinks}
    </div>
  );
};

export default LocaleSwitch;
