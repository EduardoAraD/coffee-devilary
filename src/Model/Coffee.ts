import { ImageSourcePropType } from "react-native";

import { MarketCoffee } from "./MarkedCoffee";

export interface Coffee {
  image: ImageSourcePropType;
  marked: MarketCoffee;
  name: string;
  description: string;
  price: number;
}
