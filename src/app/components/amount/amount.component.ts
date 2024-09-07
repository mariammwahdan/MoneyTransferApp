import { Component } from '@angular/core';
import { BtnComponent } from "../../shared/btn/btn.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-amount',
  standalone: true,
  imports: [BtnComponent, RouterLink],
  templateUrl: './amount.component.html',
  styleUrl: './amount.component.scss'
})
export class AmountComponent {

}
