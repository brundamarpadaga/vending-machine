import { Product } from "./product";
import { sections } from "./sections";
export const products: Product[] = [
    { id: 1, name: 'Bingo', price: 10, quantity: 10,section: sections[0]},
    { id: 2, name: 'Lays', price: 10, quantity: 15,section:sections[0]},
    { id: 3, name: 'Pulpy', price: 30, quantity: 20,section:sections[1]},
    { id: 4, name: 'Red bull', price: 80, quantity: 20,section:sections[1]},
    { id: 5, name: 'Appy', price: 50, quantity: 20,section:sections[1]},
  ];