import { Component } from '@angular/core';

@Component({
  selector: `app-main`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  welcomeMessage = 'welcome to angular message';
  width = 400;
  constructor() {
    console.log('App component Created');
  }
  changeMessage = (newMessage: string) => {
    this.welcomeMessage = newMessage;
  };
}
