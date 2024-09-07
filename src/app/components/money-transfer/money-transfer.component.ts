import { Component, OnInit } from '@angular/core';

import { MainFooterComponent } from '../main-footer/main-footer.component';
import { MobileAppSectionComponent } from '../mobile-app-section/mobile-app-section.component';
import { AuthService } from '../../core/services/auth.service';
import { TopSectionComponent } from '../../shared/top-section/top-section.component';
import { TransferConfirmationComponent } from '../transfer-confirmation/transfer-confirmation.component';

@Component({
  selector: 'app-money-transfer',
  standalone: true,
  imports: [
    MobileAppSectionComponent,
    MainFooterComponent,
    TopSectionComponent,
    TransferConfirmationComponent,
  ],
  templateUrl: './money-transfer.component.html',
  styleUrl: './money-transfer.component.scss',
})
export class MoneyTransferComponent implements OnInit {
  constructor(public _Nav: AuthService) {}
  ngOnInit() {
    this._Nav.show();
  }
}
