const dateFormatter = new Intl.DateTimeFormat('en', {
  month: 'long',
  year: 'numeric',
});

export function formatDate(date?: Date): string | null {
  if (!date) {
    return null;
  }

  return dateFormatter.format(date);
}
