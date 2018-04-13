import {SafeUrl} from "@angular/platform-browser";
import {RouteTimeSlot} from "./RouteTimeSlot";

export class Route {

    constructor(private _name: string, private _image: SafeUrl,
                private _uid: number, private _availableDates: RouteTimeSlot[]) {
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get image(): SafeUrl {
        return this._image;
    }

    set image(value: SafeUrl) {
        this._image = value;
    }

    get uid(): number {
        return this._uid;
    }

    set uid(value: number) {
        this._uid = value;
    }

    get availableDates(): RouteTimeSlot[] {
        return this._availableDates;
    }

    set availableDates(value: RouteTimeSlot[]) {
        this._availableDates = value;
    }
}
