import {SafeUrl} from "@angular/platform-browser";
import {RouteTimeSlot} from "./RouteTimeSlot";

export class Route {

    constructor(private _name: string, private _image: SafeUrl, private  _description: string,
                private  _price: string,
                private _id: number, private _availableDates: RouteTimeSlot[]) {
    }


    get price(): string {
        return this._price;
    }

    set price(value: string) {
        this._price = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
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

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get availableDates(): RouteTimeSlot[] {
        return this._availableDates;
    }

    set availableDates(value: RouteTimeSlot[]) {
        this._availableDates = value;
    }
}
