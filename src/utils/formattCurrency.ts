export const getPriceCurrency = (amount: number | bigint) => {
  return new Intl.NumberFormat("de-DE").format(amount);
};
