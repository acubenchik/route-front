import {Component, OnInit} from "@angular/core";
import {Headers, Http, RequestOptions} from "@angular/http";
import {Order} from "../model/Order";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: "items",
    templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {

    private order: Order;

    public constructor(private route: ActivatedRoute,
                       private http: Http,
                       private router: Router) {
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
        console.log(this.order);
        let options: RequestOptions = new RequestOptions({headers: headers});
        this.http.post("http://localhost:8030/checkout", JSON.stringify(this.order), options)
            .subscribe(answer => {
                    this.router.navigate(['/items']);
                }, error2 => {
                    console.log("ERROR");
                    //TODO: react somehow
                }
            );

    }


}