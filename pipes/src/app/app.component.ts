import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
  date = '';
  amount = 0;

  onInputRecieverName(name: string) {
    this.name = name;
  }

  onInputPaymentDate(date: string) {
    this.date = date;
  }

  onInputAmount(amount: string) {
    this.amount = parseFloat(amount);
  }
}
