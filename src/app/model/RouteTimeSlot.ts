export class RouteTimeSlot {
    constructor(private _id: number, private _time: string){}


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