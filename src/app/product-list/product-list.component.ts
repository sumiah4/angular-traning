import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: false,
  
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  id:number  = 0;
  details:any = '';

  products = [
    {
        "id": 1,
        "name": "Wireless Headphones",
        "category": "Electronics",
        "price": 59.99,
        "stock": 150,
        "description": "High-quality wireless headphones with noise-cancellation.",
        "rating": 4.5
    },
    {
        "id": 2,
        "name": "Stainless Steel Water Bottle",
        "category": "Home & Kitchen",
        "price": 19.99,
        "stock": 200,
        "description": "Insulated water bottle that keeps drinks cold for 24 hours.",
        "rating": 4.8
    },
    {
        "id": 3,
        "name": "Yoga Mat",
        "category": "Fitness",
        "price": 29.99,
        "stock": 100,
        "description": "Non-slip yoga mat made with eco-friendly materials.",
        "rating": 4.7
    },
    {
        "id": 4,
        "name": "Bluetooth Speaker",
        "category": "Electronics",
        "price": 45.00,
        "stock": 80,
        "description": "Portable Bluetooth speaker with excellent sound quality.",
        "rating": 4.3
    },
    {
        "id": 5,
        "name": "Desk Organizer",
        "category": "Office Supplies",
        "price": 12.50,
        "stock": 300,
        "description": "Multi-compartment organizer to keep your desk tidy.",
        "rating": 4.6
    }
];

idSelected(id:number) {
  this.id = id;
  this.details = this.products.find(product => product.id === id);
}


}
