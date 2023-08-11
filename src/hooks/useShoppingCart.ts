import { useContext } from "react";

import { ShoppingCartContext } from "../contexts/cardShopping";

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}
