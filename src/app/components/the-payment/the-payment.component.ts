import { Component } from '@angular/core';
import { BtnComponent } from "../../shared/btn/btn.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-the-payment',
  standalone: true,
  imports: [BtnComponent,RouterLink],
  templateUrl: './the-payment.component.html',
  styleUrl: './the-payment.component.scss'
})
export class ThePaymentComponent {

}
