import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from '@angular/router'
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
                       private service: ItemsService) {
    }

    public ngOnInit(): void {
        let id = +this.route.snapshot.paramMap.get('id');
        this.item = this.service.getItem(id);
    }

}