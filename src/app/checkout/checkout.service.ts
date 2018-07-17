import {Inject, Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {APP_CONFIG, IAppConfig} from "../common/config";
import {Http, RequestOptions, Response} from "@angular/http";
import {Order} from "../model/Order";

@Injectable()
export class CheckoutService {

    constructor(private http: Http,
                @Inject(APP_CONFIG) private config: IAppConfig) {
    }

    public checkout(order: Order, options: RequestOptions): Observable<Response> {
        return this.http.post(this.config.checkoutEndpoint, JSON.stringify(order), options)
    }

}