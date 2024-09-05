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

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'transferMoney', component: MoneyTransferComponent },
    {
        path: 'myAccount', component: UserAccountComponent, title: "My Account",
        children: [
            { path: '', redirectTo: 'profile', pathMatch: 'full' },
            { path: 'profile', component: UserProfileComponent },
            { path: 'payment', component: PaymentComponent },
            { path: 'setting', component: SettingComponent },
            { path: 'changePassword', component: ChangePasswordComponent },
        ]
    },
    { path: 'help', component: HelpPageComponent, title: 'Help' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: SignupComponent },
    { path: '**', component: Error404Component, title: 'Not Found' }
];
