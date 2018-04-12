import {Inject, Injectable} from "@angular/core";
import {Headers, Http, RequestOptions} from "@angular/http";
import {Item} from "../model/Item";
import {Observable} from "rxjs/Observable";
import {APP_CONFIG, IAppConfig} from "../common/config"
import {DomSanitizer} from '@angular/platform-browser';

@Injectable()
export class RouteService {

    private items: Item[];
    private readonly imageType: string = 'data:image/PNG;base64,';


    constructor(private http: Http, private sanitizer: DomSanitizer, @Inject(APP_CONFIG) private config: IAppConfig) {
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

    public loadImages(items: Item[]): void {
        console.log(items);
        items.forEach(item => {
            console.log(this.config.imageEndpoint + "/" + item.uid);
            this.http.get(this.config.imageEndpoint + "/" + item.uid)
                .map((response) => {
                    return response.json();
                }).subscribe(res => {
                item.image = this.sanitizer.bypassSecurityTrustUrl(this.imageType + res.content);
                    console.log(item.image);
            })
        });
    }


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