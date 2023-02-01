import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './common-features/component/dashboard/dashboard.component';
import { HomeComponent } from './common-features/component/home/home.component';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [AppComponent, DashboardComponent, HomeComponent],
  imports: [BrowserModule, ProductsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
