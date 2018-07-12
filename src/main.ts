import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT } from "@angular/core";
import { AppModule } from "./app/app.module";

if(process.env.ENV === "production") {
    enableProdMode();
}
declare const require: any;
const translations: any = require(`raw-loader!./locale/messages.ru.xlf`);


platformBrowserDynamic().bootstrapModule(AppModule, {
    providers: [
        {provide: TRANSLATIONS, useValue: translations},
        {provide: TRANSLATIONS_FORMAT, useValue: 'xlf'}
    ]
});