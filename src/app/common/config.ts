import { InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken("app.config");

export interface IAppConfig {
    apiEndpoint: string;
    imageEndpoint: string;
}

export const AppConfig: IAppConfig = {
    apiEndpoint: "http://localhost:8030/route/get/all",
    imageEndpoint: "http://localhost:8030/route/get/image"
};