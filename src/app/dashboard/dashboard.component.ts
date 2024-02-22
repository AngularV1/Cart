import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;

};
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public productService: ProductsService) {}
  productsArray: Product[] = [];
    
  cart: any = [];
  totalAmount: number = 0;

  
  ngOnInit(): void {
 this.productsArray= this.productService.readAll()
 }
  addToCart(product: any) {
   this.productService.addToCart(product)
  }

  removeFromCart(product: any) {
 this.productService.removeFromCart(product) 
  }
  
  }
