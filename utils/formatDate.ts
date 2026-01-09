// utils/formatDate.ts
export function formatNepaliDate(date: string, locale: 'en' | 'np') {
  return new Intl.DateTimeFormat(
    locale === 'np' ? 'ne-NP' : 'en-US',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  ).format(new Date(date));
}
