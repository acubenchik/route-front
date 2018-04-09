import {Component, OnInit} from "@angular/core";
import {RouteService} from "../services/route.service";
import {Item} from "../model/Item";

@Component({
    selector: "items",
    templateUrl: './items.component.html',
    styleUrls: ["./items.component.scss"]
})
export class ItemsComponent implements OnInit {

    private service: RouteService;

    private items: Item[];

    public constructor(service: RouteService) {
        this.service = service;
    }

    public ngOnInit(): void {
        this.service.loadRoutes().subscribe(res => {
            this.items = res;
        });
    }
}