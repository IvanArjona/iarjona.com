import { getCurrentLanguage } from './locale';

const currentLanguage = getCurrentLanguage();

const dateFormatter = new Intl.DateTimeFormat(currentLanguage, {
  month: 'long',
  year: 'numeric',
});

export function formatDate(date: Date): string {
  return dateFormatter.format(date);
}
