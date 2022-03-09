import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import i18nextConfig from '../../next-i18next.config';

const LocaleSwitch: React.FC<{}> = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const { defaultLocale } = i18nextConfig.i18n;
  const currentLocale = router.query.locale || defaultLocale;
  const { locales } = i18nextConfig.i18n;

  const localeLinks = locales.map((locale: string) => (
    <Link
      key={locale}
      href={`/${locale === defaultLocale ? '' : locale}`}
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
    <div className="text-sm mr-4 flex gap-1">
      {localeLinks}
    </div>
  );
};

export default LocaleSwitch;
