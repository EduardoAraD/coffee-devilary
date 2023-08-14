import { Coffee } from "../Model/Coffee";

import CoffeeTradicional1 from '../assets/coffeeTradicional1.png';
import CoffeeTradicional2 from '../assets/coffeeTradicional2.png';
import CoffeeTradicional3 from '../assets/coffeeTradicional3.png';
import CoffeeTradicional4 from '../assets/coffeeTradicional4.png';
import CoffeeTradicional5 from '../assets/coffeeTradicional5.png';

import CoffeeDoce1 from '../assets/coffeeDoce1.png';
import CoffeeDoce2 from '../assets/coffeeDoce2.png';
import CoffeeDoce3 from '../assets/coffeeDoce3.png';

import CoffeeEspecial1 from '../assets/coffeeEspecial1.png';
import CoffeeEspecial2 from '../assets/coffeeEspecial2.png';
import CoffeeEspecial3 from '../assets/coffeeEspecial3.png';
import CoffeeEspecial4 from '../assets/coffeeEspecial4.png';

export const dataCoffee: Coffee[] = [
  {
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: CoffeeTradicional1,
    marked: 'TRADICIONAL',
    name: 'Expresso Tradicional',
    price: 900
  },
  {
    description: 'Expresso diluído, menos intenso que o tradicional',
    image: CoffeeTradicional2,
    marked: 'TRADICIONAL',
    name: 'Expresso Americano',
    price: 900
  },
  {
    description: 'Café expresso tradicional com espuma cremosa',
    image: CoffeeTradicional3,
    marked: 'TRADICIONAL',
    name: 'Expresso Cremoso',
    price: 950
  },
  {
    description: 'Café expresso com o dobro de leite e espuma cremosa',
    image: CoffeeTradicional4,
    marked: 'TRADICIONAL',
    name: 'Latte',
    price: 1000
  },
  {
    description: 'Bebida preparada com café expresso e cubos de gelo',
    image: CoffeeTradicional5,
    marked: 'TRADICIONAL',
    name: 'Expresso Gelado',
    price: 1200
  },
  {
    description: 'Bebida com canela feita de doses de café, leite e espuma',
    image: CoffeeDoce1,
    marked: 'DOCE',
    name: 'Capuccino',
    price: 900
  },
  {
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: CoffeeDoce2,
    marked: 'DOCE',
    name: 'Mocaccino',
    price: 900
  },
  {
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    image: CoffeeDoce3,
    marked: 'DOCE',
    name: 'Chocolate Quente',
    price: 1000
  },
  {
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    image: CoffeeEspecial1,
    marked: 'ESPECIAL',
    name: 'Cubano',
    price: 1200
  },
  {
    description: 'Bebida adocicada preparada com café e leite de coco',
    image: CoffeeEspecial2,
    marked: 'ESPECIAL',
    name: 'Havaiano',
    price: 1400
  },
  {
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    image: CoffeeEspecial3,
    marked: 'ESPECIAL',
    name: 'Árabe',
    price: 1400
  },
  {
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    image: CoffeeEspecial4,
    name: 'Irlandês',
    marked: 'ESPECIAL',
    price: 1500
  }
];
