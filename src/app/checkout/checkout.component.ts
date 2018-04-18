import {Component, OnInit} from "@angular/core";
import {Headers, Http, RequestOptions} from "@angular/http";
import {Order} from "../model/Order";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: "items",
    templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {

    private order: Order;
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

    public constructor(private route: ActivatedRoute, private http: Http) {
    }

    public ngOnInit(): void {
        this.order = new Order();
        let queryParamMap = this.route.snapshot.queryParamMap;
        this.order.date = queryParamMap.get('selectedDate');
        this.order.routeId = queryParamMap.get('id');
    }

    onSubmit() {
        console.log(this.order);

        let headers: Headers = new Headers({
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token,
            'Content-Type': 'application/json'

        });
        let options: RequestOptions = new RequestOptions({headers: headers});
        console.log(JSON.stringify(this.order))
        this.http.post("http://localhost:8030/route/checkout", JSON.stringify(this.order), options)
            .subscribe(answer => {
                    console.log("SUCCESS");
                    // this.router.navigateByUrl("items/checkout");
                }, error2 => {
                    console.log("ERROR");
                    //TODO: react somehow
                },
                () => {
                    // this.router.navigateByUrl("items/checkout");
                }
            );

    }


}