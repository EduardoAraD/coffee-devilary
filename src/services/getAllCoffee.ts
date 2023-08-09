import { Coffee } from "../Model/Coffee";
import { MarketCoffee } from "../Model/MarkedCoffee";

import { dataCoffee } from "../storage/dataCoffee";

type Props = {
  marked: MarketCoffee | '';
  search: string;
}

export function getAllCoffee({ marked, search }: Props): Coffee[] {
  const data = search === '' ? dataCoffee : dataCoffee.filter(
    item => item.name.toLowerCase().includes(search.toLowerCase())
  );

  if(marked !== ''){
    return data.filter(item => item.marked === marked);
  } else {
    return data;
  }
}
