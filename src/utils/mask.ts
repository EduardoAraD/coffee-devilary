export const moneyMask = (value: number) => {
  const options = { minimumFractionDigits: 2 }
  const result = new Intl.NumberFormat('pt-BR', options).format(
    value / 100
  );

  return result;
}
