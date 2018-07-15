import {Component, OnInit} from "@angular/core";
import {Headers, Http, RequestOptions} from "@angular/http";
import {Order} from "../model/Order";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: "about",
    templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {


    public constructor(private route: ActivatedRoute,
                       private http: Http,
                       private router: Router) {
    }

    public ngOnInit(): void {
    }


}