import React, { createContext, useEffect, useState } from "react";
import { ImageSourcePropType } from "react-native";

import { ShopCart, ShopCartComplete, ShopCartWithId } from "../Model/ShopCart";

import { getCoffeeByName } from "../services/getCoffeeByName";
import { storageShopCartGet, storageShopCartRemove, storageShopCartSave } from "../storage/storageCoffee";
import { storageShopIdGet, storageShopIdSave } from "../storage/storageCoffeeId";

type ShoppingCardContext = {
  shopCart: ShopCartComplete[];
  addCoffeeShopCart: (newProduct: ShopCart & { image: ImageSourcePropType }) => Promise<void>;
  removeCoffeeShopCart: (id: number) => Promise<void>;
  updateQtdCoffeeShopCart: (idQtd: { id: number, qtd: number }) => Promise<ShopCartComplete[]>;
  clearShopCart:() => Promise<void>;
}

type ShoppingCardProviderProps = {
  children: React.ReactNode;
}

export const ShoppingCartContext = createContext<ShoppingCardContext>({} as ShoppingCardContext);

export function ShoppingCartProvider ({ children }: ShoppingCardProviderProps) {
  const [shopCart, setShopCart] = useState<ShopCartComplete[]>([]);
  const [shopCartId, setShopCartId] = useState(0);

  async function saveStorageShopCart(list: ShopCartComplete[]) {
    const listShop: ShopCartWithId[] = list.map(
      item => ({
        ml: item.ml,
        name: item.name,
        priceItem: item.priceItem,
        qtd: item.qtd,
        id: item.id
      })
    );
    await storageShopCartSave(listShop);
  }

  async function addCoffeeShopCart(newProduct: ShopCart & { image: ImageSourcePropType }) {
    const newShopCardComplete: ShopCartComplete = {
      id: shopCartId,
      ...newProduct,
    };
    const newList = [...shopCart, newShopCardComplete];
    const newId = shopCartId + 1;

    await saveStorageShopCart(newList);
    await storageShopIdSave(newId);

    setShopCart(newList);
    setShopCartId(newId);
  }

  async function removeCoffeeShopCart(id: number) {
    const newList = shopCart.filter(item => item.id !== id);

    await saveStorageShopCart(newList);

    setShopCart(newList);
  }

  async function updateQtdCoffeeShopCart({ id, qtd }: { id: number, qtd: number }) {
    const newList = shopCart.map(item => {
      if(item.id === id) {
        return { ...item, qtd: qtd }
      } else {
        return item;
      }
    });

    await saveStorageShopCart(newList);

    setShopCart(newList);
    return newList;
  }

  async function clearShopCart () {
    await storageShopCartRemove();

    setShopCart([]);
  }

  async function getLoadingData() {
    const list = await storageShopCartGet();
    const id = await storageShopIdGet();

    const listCompleted: ShopCartComplete[] = list.map(item => {
      const coffeeComplete = getCoffeeByName(item.name);
      return {
        id: item.id,
        image: coffeeComplete.image,
        ml: item.ml,
        name: item.name,
        priceItem: item.priceItem,
        qtd: item.qtd,
      }
    })

    setShopCart(listCompleted);
    setShopCartId(id);
  }

  useEffect(() => {
    getLoadingData();
  }, []);

  return (
    <ShoppingCartContext.Provider value={{
      shopCart,
      addCoffeeShopCart,
      removeCoffeeShopCart,
      updateQtdCoffeeShopCart,
      clearShopCart,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
