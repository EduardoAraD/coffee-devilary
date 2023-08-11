import React, { createContext, useState } from "react";
import { ImageSourcePropType } from "react-native";

import { ShopCart, ShopCartComplete } from "../Model/ShopCart";

type ShoppingCardContext = {
  shopCart: ShopCart[];
  addCoffeeShopCart: (newProduct: ShopCart & { image: ImageSourcePropType }) => void;
  removeCoffeeShopCart: (id: number) => void;
  updateQtdCoffeeShopCart: (idQtd: { id: number, qtd: number }) => ShopCartComplete[];
}

type ShoppingCardProviderProps = {
  children: React.ReactNode;
}

export const ShoppingCartContext = createContext<ShoppingCardContext>({} as ShoppingCardContext);

export function ShoppingCartProvider ({ children }: ShoppingCardProviderProps) {
  const [shopCart, setShopCart] = useState<ShopCartComplete[]>([]);
  const [shopCartId, setShopCartId] = useState(0);

  function addCoffeeShopCart(newProduct: ShopCart & { image: ImageSourcePropType }) {
    const newShopCardComplete: ShopCartComplete = {
      id: shopCartId,
      ...newProduct,
    };
    const newList = [...shopCart, newShopCardComplete];
    const newId = shopCartId + 1;

    setShopCart(newList);
    setShopCartId(newId);
  }

  function removeCoffeeShopCart(id: number) {
    const newList = shopCart.filter(item => item.id !== id);

    setShopCart(newList);
  }

  function updateQtdCoffeeShopCart({ id, qtd }: { id: number, qtd: number }) {
    const newList = shopCart.map(item => {
      if(item.id) {
        return { ...item, qtd: qtd }
      } else {
        return item;
      }
    });

    setShopCart(newList);
    return newList;
  }

  return (
    <ShoppingCartContext.Provider value={{
      shopCart,
      addCoffeeShopCart,
      removeCoffeeShopCart,
      updateQtdCoffeeShopCart,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
