import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Product } from '../models';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId!: number;
  product!: Product| undefined;

  constructor(private route: ActivatedRoute,public productService: ProductsService) { }

  ngOnInit() {
    this.productId = +this.route.snapshot.paramMap.get('id')!;
    this.product= this.productService.readProductFromCart(this.productId)

  }

}
