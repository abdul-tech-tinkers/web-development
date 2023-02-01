import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculationsComponent } from './components/calculations/calculations.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CalculationsComponent],
  imports: [CommonModule, FormsModule],
  exports: [CalculationsComponent],
})
export class CalculatorModule {}
