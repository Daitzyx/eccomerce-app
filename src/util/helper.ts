import { Product } from '../types';

export const calculateTotal = (cart: Product[]) => {
  const total = cart.reduce((total, item) => total + item.price * item.quantity!, 0).toFixed(2);
  return formatCurrency(Number(total));
};

export const formatCurrency = (value: number, locale = 'pt-BR', currency = 'BRL') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(value);
};
