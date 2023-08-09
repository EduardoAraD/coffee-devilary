import { Coffee } from '../../Model/Coffee';

import Coffee1Png from '../../assets/coffee1.png';
import Coffee2Png from '../../assets/coffee2.png';

export const dataCarrousel: Coffee[] = [
  {
    image: Coffee1Png,
    marked: 'TRADICIONAL',
    price: '9,90',
    description: 'Café expresso com o dobro de leite e espuma cremosa',
    name: 'Latte',
  },
  {
    image: Coffee2Png,
    marked: 'DOCE',
    price: '9,90',
    description: 'Café expresso com calda de chocolate, leite e espuma',
    name: 'Mocaccino',
  },
  {
    image: Coffee1Png,
    marked: 'ESPECIAL',
    price: '9,90',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    name: 'Irlandês',
  },
];
