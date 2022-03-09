import {
  GetStaticProps, PreviewData, GetStaticPropsContext, GetStaticPaths,
} from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ParsedUrlQuery } from 'querystring';
import i18nextConfig from '../next-i18next.config';

const getI18nPaths = () => i18nextConfig.i18n.locales.map((locale: string) => ({
  params: {
    locale,
  },
}));

async function getI18nProps(context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>) {
  const locale = (context?.params?.locale || i18nextConfig.i18n.defaultLocale) as string;
  return serverSideTranslations(locale);
}

export const getStaticPaths: GetStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths(),
});

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>,
) => ({
  props: await getI18nProps(context),
});
