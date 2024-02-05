import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  productsArray: any = [
    {
      "id": 1,
      "name": "Smartphone",
      "price": 199.99,
      "category": "Electronics",
      "description": "Samsung Galaxy"
    },
    {
      "id": 2,
      "name": "Running shoes",
      "price": 29.99,
      "category": "Clothing and Fashion",
      "description": "Sed quis ante sed metus pretium gravida. Integer hendrerit justo eu libero convallis, nec vulputate ligula interdum."
    },
    {
      "id": 3,
      "name": "Coffee Table",
      "price": 39.99,
      "category": "Home and Furniture",
      "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    },
    {
      "id": 4,
      "name": "Book Set",
      "price": 49.99,
      "category": "Books and Media",
      "description": "Ut fermentum felis a mauris suscipit auctor. Quisque ut turpis vel libero ultricies bibendum."
    },
    {
      "id": 5,
      "name": "Yoga Mat",
      "price": 59.99,
      "category": "Sports and Outdoors",
      "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse aliquet arcu vitae feugiat bibendum."
    }
  ]
  cart: any = [];
  totalAmount: number = 0;

  
  ngOnInit(): void {
  }
  addToCart(product: any) {
    const index = this.cart.findIndex((el: any) => el.id === product.id);
    if (index > -1) {
      this.cart[index].qty++;
    } else {
      product.qty = 1;
      this.cart.push(product);
    }
    this.calculateTotalAmount();

  }
  removeFromCart(product: any) {
    const index = this.cart.findIndex((el: any) => el.id === product.id);
    if (index > -1 && this.cart[index].qty > 1) {
      this.cart[index].qty--;
    } else {
      product.qty = 1;
      this.cart.splice(index, 1);
    }
    this.calculateTotalAmount();
  }

  calculateTotalAmount() {
    this.totalAmount = this.cart.reduce((total: number, product: any) => total + (product.price * product.qty), 0);
  }
  }
