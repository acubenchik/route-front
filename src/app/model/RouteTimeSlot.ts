import {Guide} from "./guide";

export class RouteTimeSlot {
    constructor(private _id: number, private _time: string,  private _endDate: string, private _guide: Guide) {
    }


    get endDate(): string {
        return this._endDate;
    }

    set endDate(value: string) {
        this._endDate = value;
    }

    get guide(): Guide {
        return this._guide;
    }

    set guide(value: Guide) {
        this._guide = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get time(): string {
        return this._time;
    }

    set time(value: string) {
        this._time = value;
    }
}