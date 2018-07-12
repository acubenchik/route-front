import {RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {ItemsDetailsComponent} from "./details/items-details.component";
import {ItemsComponent} from "./item/items.component";
import {AuthGuard} from "./services/auth.guard";
import {LoginComponent} from "./login/login.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {GuideComponent} from "./guide/guide.component";
import {GuideResolver} from "./guide/guide.resolver";
import {FaqComponent} from "./faq/faq.component";

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
    // {
    //     path: 'login',
    //     component: LoginComponent
    // },
    {
        path: 'items/checkout',
        component: CheckoutComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'faq',
        component: FaqComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'guide/info',
        component: GuideComponent,
        canActivate: [AuthGuard],
        resolve: {
            crisis: GuideResolver
        }
    },
    {path: '', redirectTo: "items", pathMatch: 'full'},

], );