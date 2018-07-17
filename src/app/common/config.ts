import { InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken("app.config");

export interface IAppConfig {
    apiEndpoint: string;
    imageEndpoint: string;
    guideEndpoint: string;
    instaEndpoint: string;
    checkoutEndpoint: string;
}

export const AppConfig: IAppConfig = {
    checkoutEndpoint: "http://localhost:8030/checkout",
    apiEndpoint: "http://localhost:8030/route/get",
    guideEndpoint: "http://localhost:8030/guide/get",
    imageEndpoint: "http://localhost:8030/image/get",
    instaEndpoint: "https://api.instagram.com/v1/users/self/media/recent/?access_token=7315371704.dbf5df8.9a9579861335412aad14ad74739d84b2"
};

export const ProdAppConfig: IAppConfig = {
    checkoutEndpoint: "http://cryptic-springs-65982.herokuapp.com/checkout",
    apiEndpoint: "http://cryptic-springs-65982.herokuapp.com/route/get",
    guideEndpoint: "http://cryptic-springs-65982.herokuapp.com/guide/get",
    imageEndpoint: "http://cryptic-springs-65982.herokuapp.com/image/get",
    instaEndpoint: "https://api.instagram.com/v1/users/self/media/recent/?access_token=7315371704.dbf5df8.9a9579861335412aad14ad74739d84b2"
};