import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import {Guide} from "../model/guide";
import {Inject, Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {APP_CONFIG, IAppConfig} from "../common/config";

@Injectable()
export class GuideResolver implements Resolve<Guide> {
    constructor(private http: Http, private router: Router,
                @Inject(APP_CONFIG) private config: IAppConfig) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Guide> {
        let id = route.queryParamMap.get('id');
        let routeId = route.queryParamMap.get('routeId');
        return this.http.get(this.config.guideEndpoint + '/' + id).take(1).map(guide => <Guide>guide.json())
            .map(guide => {
                if (guide) {
                    return guide;
                } else {
                    this.router.navigate(['/items/details/' + routeId]);
                    return null;
                }

            });
    }
}