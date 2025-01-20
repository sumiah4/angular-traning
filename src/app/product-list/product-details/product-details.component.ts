import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: false,
  
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Input()
  product: {
    "id": number,
    "name": string,
    "category": string,
    "price": number,
    "stock": number,
    "description": string,
    "rating": number
  };

  @Output() productAdded = new EventEmitter<any>();

  addToCart(){
    this.productAdded.emit(this.product);
  }

}
