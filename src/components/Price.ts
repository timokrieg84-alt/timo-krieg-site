import site from "@/config/site";

export function formatPrice(amount: number, currency = site.i18n.currency) {
  const { position, symbol, precision } = site.i18n.currencyDisplay;
  const formatted = amount.toFixed(precision).replace('.', ',');
  return position === 'post' ? `${formatted} ${symbol}` : `${symbol}${formatted}`;
}
