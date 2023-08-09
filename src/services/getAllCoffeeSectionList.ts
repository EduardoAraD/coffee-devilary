import { MarketCoffee } from "../Model/MarkedCoffee";
import { SectionListCoffee } from "../Model/SectionListCoffee";

import { getAllCoffee } from "./getAllCoffee";

type Props = {
  marked: MarketCoffee | '';
  search: string;
}

export function getAllCoffeeSectionList(props: Props): SectionListCoffee[] {
  const coffees = getAllCoffee(props);

  const list: SectionListCoffee[] = [];
  coffees.forEach(coffee => {
    const findIndex = list.findIndex(item => item.title === coffee.marked);
    if(findIndex === -1) {
      const newObj: SectionListCoffee = {
        title: coffee.marked,
        data: [coffee]
      };
      list.push(newObj);
    } else {
      list[findIndex].data.push(coffee);
    }
  })

  return list;
}
