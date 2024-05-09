import { findObjectById } from "./array"

export function formatPrice(priceToFormat) {
  let price = priceToFormat

  // @TODO: perhaps change this to if(!price) return 0
  if (!price) return "0,00 €"
  price = replaceFrenchCommaWithDot(price)

  const formattedPrice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price)
  return formattedPrice
}

export function replaceFrenchCommaWithDot(price) {
  if (typeof price === "string") price = parseFloat(price.replace(",", "."))
  return price
}

export const calculateTotalToPay = (basket, menu) => {
  if (!basket || basket.length === 0) return 0;

  return basket.reduce((total, basketProduct) => {
      const menuProduct = findObjectById(basketProduct.id, menu)
      if (!menuProduct || isNaN(menuProduct.price)) return total
      total += menuProduct.price * basketProduct.quantity
      return total
  }, 0)
}
