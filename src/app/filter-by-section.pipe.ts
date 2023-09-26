import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';


@Pipe({
  name: 'filterBySection',
})
export class FilterBySectionPipe implements PipeTransform {
  transform(products: Product[], sectionId: number): Product[] {
    return products.filter((product) => product.section.id === sectionId);
  }
}






