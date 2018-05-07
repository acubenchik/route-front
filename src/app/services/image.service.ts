import {Route} from "../model/Route";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Inject, Injectable} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
import {APP_CONFIG, IAppConfig} from "../common/config";
import {CachedImageEntity} from "../model/CachedImageEntity";


@Injectable()
export class ImageService {

    private readonly imageType: string = 'data:image/PNG;base64,';
    private etags: { [key: string]: CachedImageEntity } = {};

    constructor(private http: HttpClient, private sanitizer: DomSanitizer, @Inject(APP_CONFIG) private config: IAppConfig) {
    }

    public loadImages(routes: Route[]): void {
        routes.forEach(item => {
            let options: any = {observe: 'response'};
            let entity: CachedImageEntity = this.etags[item.uid];
            if (entity) {
                let eTag: string = entity.eTag;
                if (eTag) {
                    let headers: HttpHeaders = new HttpHeaders({
                        'If-None-Match': eTag
                    });
                    options['headers'] = headers;
                }
            }
            this.http.get(this.config.imageEndpoint + "/" + item.uid, options)
                .subscribe((res: any) => {
                    item.image = this.sanitizer.bypassSecurityTrustUrl(this.imageType + (<any>res.body).content);
                    this.etags[item.uid] = new CachedImageEntity(item.image, res.headers.get("ETag"));
                }, error => {
                    if (error.status == 304) {
                        item.image = this.etags[item.uid].image;
                    }
                })
        });
    }

}