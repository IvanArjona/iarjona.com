import i18next from 'i18next';
import { AstroI18next } from 'astro-i18next';

export async function getLanguages(): Promise<readonly string[]> {
  return i18next.languages;
}

export function getCurrentLanguage(): string {
  return i18next.language;
}

export async function changeLanguage(language?: string) {
  const defaultLocale = AstroI18next.config.defaultLocale;
  return i18next.changeLanguage(language || defaultLocale);
}

export function translatedCollection({ id }: { id: string }) {
  return id.startsWith(getCurrentLanguage());
}
