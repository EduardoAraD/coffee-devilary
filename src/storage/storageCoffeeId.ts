import AsyncStorage from '@react-native-async-storage/async-storage';

import { SHOP_ID } from './storageConfig';

export async function storageShopIdSave(id: number) {
  await AsyncStorage.setItem(SHOP_ID, String(id));
}

export async function storageShopIdGet(): Promise<number> {
  const storage = await AsyncStorage.getItem(SHOP_ID);

  const shops = storage ? Number(storage) : 0;

  return shops;
}
