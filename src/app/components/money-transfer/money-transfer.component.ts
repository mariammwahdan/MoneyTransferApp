import { Component, OnDestroy, OnInit } from '@angular/core';
import { MainFooterComponent } from '../main-footer/main-footer.component';
import { MobileAppSectionComponent } from '../mobile-app-section/mobile-app-section.component';
import { AuthService } from '../../core/services/auth.service';
import { TopSectionComponent } from '../../shared/top-section/top-section.component';
import { TransferConfirmationComponent } from '../transfer-confirmation/transfer-confirmation.component';
import { ThePaymentComponent } from '../the-payment/the-payment.component';
import { TransferAmountComponent } from '../transfer-amount/transfer-amount.component';
import { NgClass } from '@angular/common';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-money-transfer',
  standalone: true,
  imports: [
    MobileAppSectionComponent,
    MainFooterComponent,
    TopSectionComponent,
    TransferConfirmationComponent,
    ThePaymentComponent,
    TransferAmountComponent,
    NgClass,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
  ],
  templateUrl: './money-transfer.component.html',
  styleUrl: './money-transfer.component.scss',
})
export class MoneyTransferComponent implements OnInit {
  isLinkDisabled: boolean = true;
  currentStep = 1;
  activeLink: string = 'Amount';
  private routerSubscription!: Subscription;
  constructor(public _Nav: AuthService, private router: Router) {}
  ngOnInit() {
    this._Nav.show();

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.activeLink = this.router.url.split('/').pop() || '';
      });
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
