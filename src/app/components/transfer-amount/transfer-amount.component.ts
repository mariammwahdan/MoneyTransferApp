import { Component } from '@angular/core';
import { BtnComponent } from '../../shared/btn/btn.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-transfer-amount',
  standalone: true,
  imports: [BtnComponent, RouterOutlet],
  templateUrl: './transfer-amount.component.html',
  styleUrl: './transfer-amount.component.scss',
})
export class TransferAmountComponent {


}
