import {Inject, Injectable} from "@angular/core";
import {Headers, Http, RequestOptions} from "@angular/http";
import {Route} from "../model/Route";
import {Observable} from "rxjs/Observable";
import {APP_CONFIG, IAppConfig} from "../common/config"
import {DomSanitizer} from '@angular/platform-browser';
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class RouteService {

    private _routes: Route[];

    constructor(private http: Http, private sanitizer: DomSanitizer, private authenticationService: AuthenticationService,
                @Inject(APP_CONFIG) private config: IAppConfig) {
    }

    public loadRoutes(): Observable<Route[]> {
        let headers: Headers = this.authenticationService.getHeaders();
        let options: RequestOptions = new RequestOptions({headers: headers});
        return this.http.get(this.config.apiEndpoint, options).map(res => {
            this._routes = res.json()._embedded.routes;
            this._routes.forEach(route => {
                if ((<any>route)._embedded) {
                    route.availableDates = (<any>route)._embedded.routeTimeSlots;
                    route.availableDates.forEach(timeSlot => {
                        timeSlot.guide = (<any>timeSlot)._embedded.guides[0];
                    });
                }
            });
            return this._routes;
        }).catch(
            (error) => Observable.throw('Server error ' + error)
        );
    };


    public getRoute(id: number): Observable<Route> {
        let result: Route = null;
        this._routes.forEach(item => {
            if (item.uid === id) {
                result = item;
            }
        });
        return Observable.of(result);
    };


    get routes(): Route[] {
        return this._routes;
    }

    set routes(value: Route[]) {
        this._routes = value;
    }
}