import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from '@angular/router'
import {Headers, Http, RequestOptions} from "@angular/http";
import {RouteService} from "../services/route.service";

import 'rxjs/add/operator/switchMap';
import {Route} from "../model/Route";

@Component({
    selector: "items-details",
    templateUrl: './items.details.component.html'
})
export class ItemsDetailsComponent implements OnInit {

    @Input() item: Route;

    private selectedDate: string;

    public constructor(private route: ActivatedRoute,
                       private router: Router,
                       private service: RouteService,
                       private http: Http) {
    }

    public ngOnInit(): void {
        let id = +this.route.snapshot.paramMap.get('id');
        this.item = this.service.getRoute(id);
        console.log(this.item)
    }

    public selectDate(selectedDate: string) {
        this.selectedDate = selectedDate;
    }
    public checkout(): void {
        let headers: Headers = new Headers({
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token
        });
        let options: RequestOptions = new RequestOptions({headers: headers});

        this.http.post("http://localhost:8030/route/checkout", {id: this.route.snapshot.paramMap.get('id'),
            date: this.selectedDate}, options)
            .subscribe(answer => {
                    this.router.navigateByUrl("items/checkout");
                }, error2 => {
                },
                () => {
                    // this.router.navigateByUrl("items/checkout");
                }
            );
    }
}