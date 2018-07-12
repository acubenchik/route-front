export class Order {
    private name: string;
    private routeId: string;
    private email: string;
    private phone: string;
    private date: string;
    private notes: string;


    get getRouteId(): string {
        return this.routeId;
    }

    set setRouteId(value: string) {
        this.routeId = value;
    }

    get getDate(): string {
        return this.date;
    }

    set setDate(value: string) {
        this.date = value;
    }

    get getPhone(): string {
        return this.phone;
    }

    set setPhone(value: string) {
        this.phone = value;
    }

    get getNotes(): string {
        return this.notes;
    }

    set setNotes(value: string) {
        this.notes = value;
    }

    get getEmail(): string {
        return this.email;
    }

    set setEmail(value: string) {
        this.email = value;
    }

    get getName(): string {
        return this.name;
    }

    set setName(value: string) {
        this.name = value;
    }
}