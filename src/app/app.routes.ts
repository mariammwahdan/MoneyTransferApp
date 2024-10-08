import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { SettingComponent } from './components/setting/setting.component';
import { PaymentComponent } from './components/payment/payment.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoneyTransferComponent } from './components/money-transfer/money-transfer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HelpPageComponent } from './components/help-page/help-page.component';
import { Error404Component } from './components/error-404/error-404.component';
import { SettingProfileComponent } from './components/setting-profile/setting-profile.component';
import { TransferAmountComponent } from './components/transfer-amount/transfer-amount.component';
import { TransferConfirmationComponent } from './components/transfer-confirmation/transfer-confirmation.component';
import { ThePaymentComponent } from './components/the-payment/the-payment.component';
import { LogoutComponent } from './components/logout/logout.component';
import { isLoggedInGuard } from './core/guards/is-logged-in.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'home/:userEmail',
    component: HomeComponent,
    canActivate: [isLoggedInGuard],
  },
  {
    path: 'transferMoney',
    component: MoneyTransferComponent,
    children: [
      { path: '', redirectTo: 'Amount', pathMatch: 'full' },
      { path: 'Amount', component: TransferAmountComponent },
      { path: 'Confirmation', component: TransferConfirmationComponent },
      { path: 'Payment', component: ThePaymentComponent },
    ],
    canActivate: [isLoggedInGuard],
  },
  {
    path: 'myAccount',
    component: UserAccountComponent,
    title: 'My Account',
    children: [
      { path: '', redirectTo: 'Profile', pathMatch: 'full' },
      { path: 'Profile', component: UserProfileComponent },
      { path: 'Payment', component: PaymentComponent },
      {
        path: 'Setting',
        component: SettingComponent,
        children: [
          { path: '', redirectTo: 'Profile', pathMatch: 'full' },
          { path: 'Profile', component: SettingProfileComponent },
          { path: 'ChangePassword', component: ChangePasswordComponent },
        ],
      },
      { path: 'ChangePassword', component: ChangePasswordComponent },
    ],
    canActivate: [isLoggedInGuard],
  },
  {
    path: 'help',
    component: HelpPageComponent,
    title: 'Help',
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'loggedout', component: LogoutComponent },
  { path: '**', component: Error404Component, title: 'Not Found' },
];
