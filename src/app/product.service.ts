import { Injectable } from '@angular/core';
import { Product } from './product';
import { Section } from './section';
import { sections } from './sections';
import { products } from './products';
import { SectionListComponent } from './section-list/section-list.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  sections: Section[] = sections; 
  products: Product[] = products; 


  constructor() { }

  getSections(): Section[] {
    return this.sections;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(productId: number): Product | undefined {
    return this.products.find((product) => product.id === productId);
  }
}
