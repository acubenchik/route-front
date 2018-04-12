import {SafeUrl} from "@angular/platform-browser";

export class Item {
    name: string;
    image: SafeUrl;
    uid: number;

    constructor(name: string, uid: number) {
        this.name = name;
        this.uid=uid;
    }
}
