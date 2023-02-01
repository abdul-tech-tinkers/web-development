import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'productfilter',
})
export class ProductFilterPipe implements PipeTransform {
  transform(value: Product[], ...args: string[]): Product[] {
    // value - the value ur filter
    // arg additional args passed currency:'INR' inr is additional args
    console.log(`inside product filter pipe`);
    let filterText = args[0];
    if (filterText && filterText !== '' && value && value.length > 0) {
      console.log(`filter text ${filterText}`);
      return value.filter((product: Product) => {
        return (
          product.productName
            .toLocaleLowerCase()
            .indexOf(filterText.toLocaleLowerCase()) !== -1
        );
      });
    }
    {
      console.log(`default values`);
      return value;
    }
  }
}
