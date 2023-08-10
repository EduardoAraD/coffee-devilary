import { Coffee } from "../Model/Coffee";

import { getAllCoffee } from "./getAllCoffee";

export function getThreeCoffeeInCarrousel() {
  const list: Coffee[] = [];

  const coffeesTradicional = getAllCoffee({ marked: 'TRADICIONAL', search: '' });
  const coffeeTradicional = coffeesTradicional[Math.floor(Math.random() * coffeesTradicional.length)]
  list.push(coffeeTradicional);

  const coffeesDoce = getAllCoffee({ marked: 'DOCE', search: '' });
  const coffeeDoce = coffeesDoce[Math.floor(Math.random() * coffeesDoce.length)]
  list.push(coffeeDoce);

  const coffeesEspecial = getAllCoffee({ marked: 'ESPECIAL', search: '' });
  const coffeeEspecial = coffeesEspecial[Math.floor(Math.random() * coffeesEspecial.length)]
  list.push(coffeeEspecial);

  return list;
}
