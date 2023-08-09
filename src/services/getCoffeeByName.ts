import { dataCoffee } from "../storage/dataCoffee";

export function getCoffeeByName(name: string) {
  return dataCoffee.find(item => item.name === name);
}
