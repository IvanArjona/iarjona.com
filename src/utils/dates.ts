import type { Lang } from "~/types";

export function formatDate(date: Date, lang: Lang): string {
  const dateFormatter = new Intl.DateTimeFormat(lang, {
    month: 'long',
    year: 'numeric',
  });

  return dateFormatter.format(date);
}
