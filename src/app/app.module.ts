import {NgModule} from '@angular/core';
import {ItemsComponent} from './item/items.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import {APP_ROUTING} from './app.routing';

import {HomeComponent} from './home/home.component';

import '../global.scss'
import {ItemsDetailsComponent} from "./details/items-details.component";
import {RouteService} from "./services/route.service";
// import {LoginComponent} from "./login/login.component";
import {AuthenticationService} from "./services/authentication.service";
import {AuthGuard} from "./services/auth.guard";
import {CheckoutComponent} from "./checkout/checkout.component";
import {APP_CONFIG, AppConfig} from "./common/config";
import {NameValidator} from "./directives/name.validator";
import {ImageService} from "./services/image.service";
import {GuideComponent} from "./guide/guide.component";
import {GuideResolver} from "./guide/guide.resolver";
import {FaqComponent} from "./faq/faq.component";
import {AboutComponent} from "./about/about.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        HttpClientModule,
        APP_ROUTING
    ],
    declarations: [
        AboutComponent,
        FaqComponent,
        ItemsComponent,
        ItemsDetailsComponent,
        // LoginComponent,
        HomeComponent,
        CheckoutComponent,
        NameValidator,
        GuideComponent

    ],
    providers: [
        RouteService,
        AuthenticationService,
        AuthGuard,
        ImageService,
        GuideResolver,
        {provide: APP_CONFIG, useValue: AppConfig}
    ],
    bootstrap: [
        HomeComponent
    ]
})
export class AppModule {
}