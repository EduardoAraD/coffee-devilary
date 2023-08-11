import { ImageSourcePropType } from "react-native";

import { getCoffeeByName } from "./getCoffeeByName";

import CoffeeEspecial1 from '../assets/coffeeEspecial1.png';

export function getImageCoffeeByName(name: string): ImageSourcePropType {
  const coffee = getCoffeeByName(name);
  if( coffee) {
    return coffee.image;
  } else {
    return CoffeeEspecial1;
  }
}
