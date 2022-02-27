import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LocaleSwitch: React.FC<{}> = () => {
  const { locale: currentLocale, locales } = useRouter();
  const { t } = useTranslation('common');

  if (!locales) {
    return null;
  }

  const localeLinks = locales.map((locale: string) => (
    <Link
      key={locale}
      href="#"
      locale={locale}
    >
      <a
        title={t(`locale-${locale}`)}
        className={`uppercase ${locale === currentLocale ? 'underline' : ''}`}
      >
        {locale}
      </a>
    </Link>
  ));

  return (
    <div className="text-white text-sm mr-4 flex gap-1">
      {localeLinks}
    </div>
  );
};

export default LocaleSwitch;
