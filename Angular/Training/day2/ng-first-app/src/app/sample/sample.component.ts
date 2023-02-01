import { Component } from '@angular/core';

@Component({
  selector: `app-sample`,
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
})
export class SampleComponent {
  constructor() {
    console.log('sample component Created');
  }

  people = ['anil', 'sunil'];
}
