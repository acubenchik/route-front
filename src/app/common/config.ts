import { InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken("app.config");

export interface IAppConfig {
    apiEndpoint: string;
    imageEndpoint: string;
    guideEndpoint: string;
}

export const AppConfig: IAppConfig = {
    apiEndpoint: "http://localhost:8030/route/get/all",
    guideEndpoint: "http://localhost:8030/guide",
    imageEndpoint: "http://localhost:8030/image/get"
};