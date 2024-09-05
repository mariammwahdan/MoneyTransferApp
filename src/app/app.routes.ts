import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { SettingComponent } from './components/setting/setting.component';
import { PaymentComponent } from './components/payment/payment.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoneyTransferComponent } from './components/money-transfer/money-transfer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HelpComponent } from './components/help/help.component';

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
    { path: 'help', component: HelpComponent, title: 'Help' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NotFoundComponent, title: 'Not Found' }
];
