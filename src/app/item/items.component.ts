import {Component, OnInit} from "@angular/core";
import {RouteService} from "../services/route.service";
import {Route} from "../model/Route";
import {ImageService} from "../services/image.service";

@Component({
    selector: "items",
    templateUrl: './items.component.html',
    styleUrls: ["./items.component.scss"]
})
export class ItemsComponent implements OnInit {

    private routes: Route[];

    public constructor(private routeService: RouteService, private imageService: ImageService) {
    }

    public ngOnInit(): void {
        this.routeService.loadRoutes().subscribe(res => {
            this.routes = res;
            this.imageService.loadImages(this.routes);
        });
    }
}