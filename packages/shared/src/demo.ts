export function formatPrice(cents: number, currency = "USD") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency
    }).format(cents / 100);
  }
  