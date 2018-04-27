import {Route} from "../model/Route";
import {HttpClient} from "@angular/common/http";
import {Inject, Injectable} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
import {APP_CONFIG, IAppConfig} from "../common/config";


@Injectable()
export class ImageService {

    private readonly imageType: string = 'data:image/PNG;base64,';
    private etags: { [key: string]: String } = {};

    constructor(private http: HttpClient, private sanitizer: DomSanitizer, @Inject(APP_CONFIG) private config: IAppConfig) {
    }

    public loadImages(routes: Route[]): void {
        routes.forEach(item => {
            this.http.get(this.config.imageEndpoint + "/" + item.uid, {observe: 'response'})
                .subscribe(res => {
                    this.etags[item.uid] = res.headers.get("ETag");
                    item.image = this.sanitizer.bypassSecurityTrustUrl(this.imageType + (<any>res.body).content);
                })
        });
    }

}