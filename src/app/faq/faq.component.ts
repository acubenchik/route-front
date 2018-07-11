import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from '@angular/router'
import {Http} from "@angular/http";
import {RouteService} from "../services/route.service";

import 'rxjs/add/operator/switchMap';
import {Route} from "../model/Route";

@Component({
    selector: "faq",
    templateUrl: './faq.component.html',
    styleUrls: ["./faq.scss"]
})
export class FaqComponent implements OnInit {
    ngOnInit(): void {
    }
}