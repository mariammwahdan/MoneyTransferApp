import { Component } from '@angular/core';
import { BtnComponent } from '../../shared/btn/btn.component';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-transfer-amount',
  standalone: true,
  imports: [BtnComponent, RouterOutlet, ReactiveFormsModule],
  templateUrl: './transfer-amount.component.html',
  styleUrl: './transfer-amount.component.scss',
})
export class TransferAmountComponent {
  localStorageAmount: any;
  myAccountAmountForm = new FormGroup({
    amount: new FormControl(null),
    recipientName: new FormControl(null),
    recipientAccount: new FormControl(null),
  })
  ngOnInit(): void {
    this.localStorageAmount = Number(localStorage.getItem('sendingAmount')!)
    this.myAccountAmountForm.get('amount')?.setValue(this.localStorageAmount)
    console.log(this.myAccountAmountForm.get('amount')?.value);

  }

  sendData() {
    console.log(this.myAccountAmountForm.value);
  }
}
