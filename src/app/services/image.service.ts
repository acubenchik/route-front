import {Item} from "../model/Item";
import {Http} from "@angular/http";
import {Inject, Injectable} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
import {APP_CONFIG, IAppConfig} from "../common/config";

@Injectable()
export class ImageService {

    private readonly imageType: string = 'data:image/PNG;base64,';

    constructor(private http: Http, private sanitizer: DomSanitizer, @Inject(APP_CONFIG) private config: IAppConfig) {
    }

    public loadImages(items: Item[]): void {
        console.log(items);
        items.forEach(item => {
            this.http.get(this.config.imageEndpoint + "/" + item.uid)
                .map((response) => {
                    return response.json();
                }).subscribe(res => {
                item.image = this.sanitizer.bypassSecurityTrustUrl(this.imageType + res.content);
            })
        });
    }

}