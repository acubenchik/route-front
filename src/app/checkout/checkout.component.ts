import {Component, OnInit} from "@angular/core";
import {Headers, RequestOptions} from "@angular/http";
import {Order} from "../model/Order";
import {ActivatedRoute, Router} from "@angular/router";
import {CheckoutService} from "./checkout.service";

@Component({
    selector: "items",
    templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {

    private order: Order;

    public constructor(private route: ActivatedRoute,
                       private router: Router,
                       private checkoutService: CheckoutService) {
    }

    public ngOnInit(): void {
        this.order = new Order();
        let queryParamMap = this.route.snapshot.queryParamMap;
        this.order.setDate = queryParamMap.get('selectedDate');
        this.order.setRouteId = queryParamMap.get('id');
    }

    onSubmit() {
        let headers: Headers = new Headers({
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token,
            'Content-Type': 'application/json'

        });
        let options: RequestOptions = new RequestOptions({headers: headers});
        this.checkoutService.checkout(this.order, options)
            .subscribe(answer => {
                    this.router.navigate(['/items']);
                }, error2 => {
                    //TODO: react somehow
                }
            );

    }


}