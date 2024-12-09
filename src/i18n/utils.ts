import { defaultLang, showDefaultLang } from './config';
import { translations } from './translations';
import type { Lang } from '~/types';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) {
    return lang as Lang;
  }
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof translations)[typeof defaultLang]) {
    return translations[lang][key] || translations[defaultLang][key];
  };
}

export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}/${path}`;
  };
}

export function usefilterCollectionByLanguage(lang: Lang) {
  return function filterCollectionByLanguage({ id }: { id: string }, l: string = lang) {
    return id.startsWith(l);
  };
}
