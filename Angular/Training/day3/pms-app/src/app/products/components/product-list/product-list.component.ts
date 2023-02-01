import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  allProducts?: Product[];
  loading: boolean = true;
  errorMessage = '';
  private getProductsSubscription?: Subscription;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    console.log('product list component init');
    this.getProductsSubscription = this.productService.getProducts().subscribe({
      next: (response) => {
        console.log('get products subscribe next');
        this.allProducts = response.data;
        this.errorMessage = '';
        this.loading = false;
      },
      error: (error: any) => {
        console.log('get products subscribe error');
        this.allProducts = undefined;
        this.errorMessage = error.message;
        this.loading = false;
      },
      complete: () => {
        console.log('get products subscribe complete');
      },
    });
  }

  ngOnDestroy() {
    this.getProductsSubscription?.unsubscribe();
  }
}
