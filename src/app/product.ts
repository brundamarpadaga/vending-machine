import { Section } from "./section";

export interface Product 
{
    id: number;
    name: string;
    price: number;
    quantity: number;
    section : Section;
}