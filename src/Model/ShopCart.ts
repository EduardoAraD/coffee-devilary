import { ImageSourcePropType } from "react-native";

export interface ShopCart {
  qtd: number;
  name: string;
  ml: string;
  priceItem: number;
}

export interface ShopCartComplete {
  id: number;
  qtd: number;
  name: string;
  image: ImageSourcePropType;
  ml: string;
  priceItem: number;
}
