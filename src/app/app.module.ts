import {NgModule} from '@angular/core';
import {ItemsComponent} from './item/items.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {APP_ROUTING} from './app.routing';

import {HomeComponent} from './home/home.component';

import '../global.scss'
import {ItemsDetailsComponent} from "./details/items-details.component";
import {RouteService} from "./services/route.service";
import {SecondService} from "./route/second.service";
import {LoginComponent} from "./login/login.component";
import {AuthenticationService} from "./services/authentication.service";
import {AuthGuard} from "./services/auth.guard";
import {CheckoutComponent} from "./checkout/checkout.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        APP_ROUTING
    ],
    declarations: [
        ItemsComponent,
        ItemsDetailsComponent,
        LoginComponent,
        HomeComponent,
        CheckoutComponent
    ],
    providers: [
        {provide: RouteService, useClass: RouteService},
        AuthenticationService,
        AuthGuard
    ],
    bootstrap: [
        HomeComponent
    ]
})
export class AppModule {
}