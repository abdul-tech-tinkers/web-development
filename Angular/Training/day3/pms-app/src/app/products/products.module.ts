import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FilterProductComponent } from './components/filter-product/filter-product.component';
import { ProductContainerComponent } from './components/product-container/product-container.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import {
  PRODUCT_SERVICE_TOKEN,
  PRODUCT_URL_TOKEN,
  ProductUrl,
} from 'src/constants/app-constants';
import { StarComponent } from '../common-features/component/star/star.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';

@NgModule({
  declarations: [
    AddProductComponent,
    ProductListComponent,
    FilterProductComponent,
    ProductContainerComponent,
    StarComponent,
    ProductFilterPipe,
  ],
  imports: [CommonModule, HttpClientModule],
  providers: [
    //custom provider
    {
      provide: PRODUCT_URL_TOKEN,
      useValue: ProductUrl,
    },
    {
      provide: PRODUCT_SERVICE_TOKEN,
      useClass: ProductService,
    },
    //ProductService,
  ],
  exports: [ProductListComponent, StarComponent],
})
export class ProductsModule {}
