export class Order {
    private _name: string;
    private _routeId: string;
    private _email: string;
    private _phone: string;
    private _date: string;
    private _notes: string;


    get routeId(): string {
        return this._routeId;
    }

    set routeId(value: string) {
        this._routeId = value;
    }

    get date(): string {
        return this._date;
    }

    set date(value: string) {
        this._date = value;
    }

    get phone(): string {
        return this._phone;
    }

    set phone(value: string) {
        this._phone = value;
    }

    get notes(): string {
        return this._notes;
    }

    set notes(value: string) {
        this._notes = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}