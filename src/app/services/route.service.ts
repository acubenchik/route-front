import {Inject, Injectable} from "@angular/core";
import {Headers, Http, RequestOptions} from "@angular/http";
import {Route} from "../model/Route";
import {Observable} from "rxjs/Observable";
import {APP_CONFIG, IAppConfig} from "../common/config"
import {DomSanitizer} from '@angular/platform-browser';

@Injectable()
export class RouteService {

    private routes: Route[];

    constructor(private http: Http, private sanitizer: DomSanitizer, @Inject(APP_CONFIG) private config: IAppConfig) {
    }

    public loadRoutes(): Observable<Route[]> {
        let headers: Headers = new Headers({
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token
        });
        let options: RequestOptions = new RequestOptions({headers: headers});
        return this.http.get(this.config.apiEndpoint, options).map(res => {
            this.routes = res.json()._embedded.routes;
            this.routes.forEach(route => {
                if ((<any>route)._embedded) {
                    route.availableDates = (<any>route)._embedded.routeTimeSlots;
                }
            });
            return this.routes;
        }).catch(
            (error) => Observable.throw('Server error' + error)
        );
    };


    public getRoute(id: number): Route {
        let result: Route;
        this.routes.forEach(item => {
            if (item.uid === id) {
                result = item;
            }
        });
        return result;
    };

}