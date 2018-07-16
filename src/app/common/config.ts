import { InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken("app.config");

export interface IAppConfig {
    apiEndpoint: string;
    imageEndpoint: string;
    guideEndpoint: string;
}

export const AppConfig: IAppConfig = {
    apiEndpoint: "http://localhost:8030/route/get",
    guideEndpoint: "http://localhost:8030/guide/get",
    imageEndpoint: "http://localhost:8030/image/get"
};

export const ProdAppConfig: IAppConfig = {
    apiEndpoint: "http://cryptic-springs-65982.herokuapp.com/route/get",
    guideEndpoint: "http://cryptic-springs-65982.herokuapp.com/guide/get",
    imageEndpoint: "http://cryptic-springs-65982.herokuapp.com/image/get"
};