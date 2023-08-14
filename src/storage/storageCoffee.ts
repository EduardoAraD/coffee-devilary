import AsyncStorage from '@react-native-async-storage/async-storage';

import { ShopCartWithId } from '../Model/ShopCart';

import { SHOP_CART } from "./storageConfig";

export async function storageShopCartSave(list: ShopCartWithId[]) {
  await AsyncStorage.setItem(SHOP_CART, JSON.stringify(list));
}

export async function storageShopCartGet() {
  const storage = await AsyncStorage.getItem(SHOP_CART);

  const shops: ShopCartWithId[] = storage ? JSON.parse(storage) : [];

  return shops;
}

export async function storageShopCartRemove() {
  try {
    await AsyncStorage.removeItem(SHOP_CART);
  } catch (error) {
    throw error;
  }
}
