import { Coffee } from "../Model/Coffee";

import { dataCoffee } from "../storage/dataCoffee";

import CoffeeTradicional1 from '../assets/coffeeTradicional1.png';

export function getCoffeeByName(name: string): Coffee {
  const coffee = dataCoffee.find(item => item.name === name);
  if(coffee) {
    return coffee;
  } else {
    return {
      description: '',
      image: CoffeeTradicional1,
      marked: 'TRADICIONAL',
      name: '',
      price: 0
    }
  }
}
