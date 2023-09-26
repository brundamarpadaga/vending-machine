import { Component } from '@angular/core';
import { Section } from '../section';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Input } from '@angular/core';


@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent {

  @Input() selectedSection: Section | undefined;
  sections: Section[] = [];
  products: Product[] = [];

  constructor(private productService: ProductService) {
    
    this.sections = this.productService.getSections();
    this.products = this.productService.getProducts();
  }

}
