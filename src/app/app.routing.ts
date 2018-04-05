import {RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {ItemsDetailsComponent} from "./details/items-details.component";
import {ItemsComponent} from "./item/items.component";
import {AuthGuard} from "./services/auth.guard";
import {LoginComponent} from "./login/login.component";
import {CheckoutComponent} from "./checkout/checkout.component";

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot([
    {
        path: 'items',
        component: ItemsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'items/details/:id',
        component: ItemsDetailsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'items/checkout',
        component: CheckoutComponent,
        canActivate: [AuthGuard]
    },
    {path: '', redirectTo: "login", pathMatch: 'full'},

], );