import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GetProductsService} from "../../../services/get-products.service";
import {ProductType} from "../../../types/product.type";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: ProductType;

  constructor(private activatedRoute: ActivatedRoute, private getProductsService: GetProductsService) {
    this.product = {
      description: '',
      id: 0,
      image: '',
      price: 0,
      title: ''
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {

        this.getProductsService.getProduct(+params['id'])
          .subscribe({
            next: (data) => {
              this.product = data;
            }
          })
      }
    });
  }

}
