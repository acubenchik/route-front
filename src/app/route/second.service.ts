import {Injectable} from "@angular/core";

@Injectable()
export class SecondService {

    items = [
        {id: 1, name: 'Lol'},
        {id: 2, name: 'Lol1'}
    ];

    public getItem(id: number) {
        let result = {};
        this.items.forEach(item => {
            if (item.id === id) {
                result = item;
            }
        });
        return result;
    }

    public getItems() {
        return this.items;
    }
}