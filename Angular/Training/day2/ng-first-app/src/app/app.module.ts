import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { SampleComponent } from './sample/sample.component';
import { CalculatorModule } from './calculator/calculator.module';

@NgModule({
  //register components, directive and pipes
  declarations: [AppComponent, SampleComponent],
  //register services
  providers: [],
  // register other child modules and built-in modules
  imports: [BrowserModule, CalculatorModule],
  // the name of the component, directive, pipes and modules that you want to be exposed to
  //other mdoules of your application
  exports: [AppComponent],
  // default component to be render by default.
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log('App Module Created');
  }
}
