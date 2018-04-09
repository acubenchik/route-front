import {Component, OnInit} from "@angular/core";
import {RouteService} from "../services/route.service";
import {Item} from "../model/Item";

@Component({
    selector: "items",
    templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {


    public constructor() {
    }

    public ngOnInit(): void {
    }
}