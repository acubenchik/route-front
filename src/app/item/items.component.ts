import {Component, OnInit} from "@angular/core";
import {ItemsService} from "../services/items.service";
import {Item} from "../model/Item";

@Component({
    selector: "items",
    templateUrl: './items.component.html',
    styleUrls: ["./items.component.scss"]
})
export class ItemsComponent implements OnInit {

    private service: ItemsService;

    private items: Item[];

    public constructor(service: ItemsService) {
        this.service = service;
    }

    public ngOnInit(): void {
        this.service.loadItems().subscribe(res => {
            this.items = res;
        });
    }
}