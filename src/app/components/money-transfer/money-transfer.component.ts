import { Component } from '@angular/core';

import { MainFooterComponent } from '../main-footer/main-footer.component';
import { MobileAppSectionComponent } from '../mobile-app-section/mobile-app-section.component';

@Component({
  selector: 'app-money-transfer',
  standalone: true,
  imports: [MobileAppSectionComponent, MainFooterComponent],
  templateUrl: './money-transfer.component.html',
  styleUrl: './money-transfer.component.scss',
})
export class MoneyTransferComponent {}
