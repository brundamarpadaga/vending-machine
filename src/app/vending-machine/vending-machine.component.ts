import { Component } from '@angular/core';
import { Product } from '../product';
import { products } from '../products';
import { ProductService } from '../product.service';
import { Section } from '../section';

@Component({
  selector: 'app-vending-machine',
  templateUrl: './vending-machine.component.html',
  styleUrls: ['./vending-machine.component.css']
})
export class VendingMachineComponent {

  selectedProductId !: number;
  selectedSection!: Section;
  products: Product[] = [];
  filteredProducts: Product[] = [];
  cart: Product[] = [];
  isDoorOpen = false; // Flag to track if the door is open

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  openSection() {
    const product = this.productService.getProductById(this.selectedProductId);

    if (product) {
      this.selectedSection = product.section;
      this.filteredProducts = this.products.filter(
        (p) => p.section.id === this.selectedSection.id 
      );

      this.isDoorOpen = true;

    } else {
      console.error('Product not found.');
      this.filteredProducts = [];
    }
  }

  addToCart(product: Product) {

    const index = this.products.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      // Decrease the quantity of the product
      if (this.products[index].quantity > 0) {
        this.products[index].quantity--;
      }

      // If the quantity reaches zero, remove the product from the list
      if (this.products[index].quantity === 0) {
        this.products.splice(index, 1);
      }


    this.cart.push(product);
  }
}

  calculateTotalCost(): number {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }

  closeDoor() {
    this.isDoorOpen = false;
  }

}
