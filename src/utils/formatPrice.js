export default function formatPrice(price) {
  return price.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  });
}
