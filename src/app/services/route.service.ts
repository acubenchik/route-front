import {Inject, Injectable} from "@angular/core";
import {Headers, Http, RequestOptions} from "@angular/http";
import {Item} from "../model/Item";
import {Observable} from "rxjs/Observable";
import {APP_CONFIG, IAppConfig} from "../common/config"

@Injectable()
export class RouteService {

    private items: Item[];

    constructor(private http: Http, @Inject(APP_CONFIG) private config: IAppConfig) {
    }

    public loadRoutes(): Observable<Item[]> {
        let headers: Headers = new Headers({
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token
        });
        let options: RequestOptions = new RequestOptions({headers: headers});
        return this.http.get(this.config.apiEndpoint, options).map(res => {
            this.items = res.json()._embedded.routes;
            return this.items;
        }).catch(
            (error) => Observable.throw('Server error')
        );
    };

    public getRoute(id: number): Item {
        let result: Item;
        this.items.forEach(item => {
            if (item.uid === id) {
                result = item;
            }
        });
        return result;
    };

}