import {Component, Inject, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Http} from "@angular/http";
import {APP_CONFIG, IAppConfig} from "../common/config";
import {Guide} from "../model/guide";

@Component({
    selector: "items",
    templateUrl: './guide.component.html'
})
export class GuideComponent implements OnInit {

    private _guide: Guide;

    constructor(private route: ActivatedRoute, private http: Http,
                @Inject(APP_CONFIG) private config: IAppConfig) {
    }

    get guide(): Guide {
        return this._guide;
    }

    set guide(value: Guide) {
        this._guide = value;
    }

    ngOnInit(): void {
        this.route.data.subscribe((data: { crisis: Guide }) => {
            this._guide = data.crisis;
        });

    }
}