import {SafeUrl} from "@angular/platform-browser";

export class CachedImageEntity {

    constructor(private _image: SafeUrl, private _eTag: string) {
    }

    get eTag(): string {
        return this._eTag;
    }

    set eTag(value: string) {
        this._eTag = value;
    }

    get image(): SafeUrl {
        return this._image;
    }

    set image(value: SafeUrl) {
        this._image = value;
    }
}