import {Inject, Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {APP_CONFIG, IAppConfig} from "../common/config";

@Injectable()
export class InstaService {


    constructor(private http: Http,
                @Inject(APP_CONFIG) private config: IAppConfig) {
    }

    public loadFeed(): Observable<any> {
        return this.http.get(this.config.instaEndpoint)
            .map(res => {
                let imageSources: string[] = [];
                res.json().data.forEach(item => {
                    imageSources.push(item.images.standard_resolution.url);
                });
                return imageSources;
            })
    }
}