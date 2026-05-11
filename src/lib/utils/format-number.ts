export const toLocalizedNumber = (num: number, locale: string) =>
  new Intl.NumberFormat(locale).format(num);
