import {Component, OnInit} from "@angular/core";
import {Order} from "../model/Order";

@Component({
    selector: "items",
    templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {

    private order: Order;
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

    public constructor() {
    }

    public ngOnInit(): void {
        this.order = new Order();
    }

    onSubmit() {
        console.log(this.order);
    }
}