import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        component: HomeComponent
    },
    {
        path: 'account',
        title: 'Account Settings',
        component: AccountComponent
    }
];
