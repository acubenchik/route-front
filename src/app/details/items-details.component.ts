import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from '@angular/router'
import {Http} from "@angular/http";
import {RouteService} from "../services/route.service";

import 'rxjs/add/operator/switchMap';
import {Route} from "../model/Route";

@Component({
    selector: "items-details",
    templateUrl: './items.details.component.html',
    styleUrls: ["./items.details.scss"]
})
export class ItemsDetailsComponent implements OnInit {

    @Input() item: Route;

    private selectedDate: string;

    isCollapsed: Boolean;
    public constructor(private route: ActivatedRoute,
                       private router: Router,
                       private service: RouteService,
                       private http: Http) {
        this.isCollapsed = false;
    }

    public ngOnInit(): void {
        let id = +this.route.snapshot.paramMap.get('id');
        this.service.getRoute(id).subscribe(result => {
                this.item = result;
            },
            error => {
                this.item = null;
            });
    }

    public checkout(selectedDate: string): void {
        this.selectedDate = selectedDate;
        this.router.navigate(["items/checkout"],
            {
                queryParams: {
                    selectedDate: this.selectedDate,
                    id: this.route.snapshot.paramMap.get('id')
                }
            });
    }

    public guideTo(guideId: string): void {
        this.router.navigate(["guide/info"], {queryParams: {id: guideId, routeId: this.item.id}});
    }
}