import { Component } from '@angular/core';
import { FormGroup, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.css'],
})
export class CalculationsComponent {
  a: number = 0;
  b: number = 0;

  add = () => {
    return this.a + this.b;
  };

  get first() {
    return this.a;
  }
}
