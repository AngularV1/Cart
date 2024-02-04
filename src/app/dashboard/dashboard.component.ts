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
      "name": "Product 1",
      "price": 19.99,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget justo vitae urna suscipit feugiat."
    },
    {
      "id": 2,
      "name": "Product 2",
      "price": 29.99,
      "description": "Sed quis ante sed metus pretium gravida. Integer hendrerit justo eu libero convallis, nec vulputate ligula interdum."
    },
    {
      "id": 3,
      "name": "Product 3",
      "price": 39.99,
      "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    },
    {
      "id": 4,
      "name": "Product 4",
      "price": 49.99,
      "description": "Ut fermentum felis a mauris suscipit auctor. Quisque ut turpis vel libero ultricies bibendum."
    },
    {
      "id": 5,
      "name": "Product 5",
      "price": 59.99,
      "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse aliquet arcu vitae feugiat bibendum."
    }
  ]
  cart: any = [];
  
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
  }
  removeFromCart(product: any) {
    const index = this.cart.findIndex((el: any) => el.id === product.id);
    if (index > -1 && this.cart[index].qty > 1) {
      this.cart[index].qty--;
    } else {
      product.qty = 1;
      this.cart.splice(index, 1);
    }
  }
  
}
