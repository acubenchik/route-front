import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from '@angular/router'
import {Headers, Http, RequestOptions} from "@angular/http";
import {ItemsService} from "../services/items.service";

import 'rxjs/add/operator/switchMap';

@Component({
    selector: "items-details",
    templateUrl: './items.details.component.html'
})
export class ItemsDetailsComponent implements OnInit {

    @Input() item: any;

    public constructor(private route: ActivatedRoute,
                       private router: Router,
                       private service: ItemsService,
                       private http: Http) {
    }

    public ngOnInit(): void {
        let id = +this.route.snapshot.paramMap.get('id');
        this.item = this.service.getItem(id);
    }

    public checkout(): void {
        let headers: Headers = new Headers({
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token
        });
        let options: RequestOptions = new RequestOptions({headers: headers});

        console.log(options)
        this.http.post("http://localhost:8030/route/checkout", {id: this.route.snapshot.paramMap.get('id')}, options)
            .subscribe(answer => {
                }, error2 => {
                },
                () => {
                    this.router.navigateByUrl("items/checkout");
                }
            );
    }
}