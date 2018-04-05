import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers} from "@angular/http";
import {Item} from "../model/Item";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ItemsService {

    private url = "http://localhost:8030/route/get/all";

    constructor(private http: Http) {

    }

    public loadItems(): Observable<Item[]> {
        let headers: Headers = new Headers({
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token
        });
        let options: RequestOptions = new RequestOptions({headers: headers});
        return this.http.get(this.url, options).map(res => {
            this.items = res.json()._embedded.routes;
            return this.items;
        }).catch(
            (error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    items : Item[];

    public getItem(id: number) {
        let result = {};
        this.items.forEach(item => {
            if (item.uid === id) {
                result = item;
            }
        });
        return result;
    }

}