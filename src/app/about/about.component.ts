import {Component, OnInit} from "@angular/core";
import {InstaService} from "./insta.service";
import {AnimationConfig, ICarouselConfig} from 'angular4-carousel';

@Component({
    selector: "about",
    templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

    public imageSources: string[] = [
        "https://scontent.cdninstagram.com/vp/6ed2583e0ccc151f602fbc7dc30f203d/5BE9E2CF/t51.2885-15/sh0.08/e35/s640x640/36633602_481361922303816_4121089449146712064_n.jpg",
        "https://scontent.cdninstagram.com/vp/460fcee33a9dde61e5f320a90aff0e97/5BD031EF/t51.2885-15/sh0.08/e35/s640x640/36638649_204229226959021_263280885359443968_n.jpg"
    ];

    public config: ICarouselConfig = {
        verifyBeforeLoad: false,
        log: false,
        animation: true,
        animationType: AnimationConfig.SLIDE,
        autoplay: true,
        autoplayDelay: 2000,
        stopAutoplayMinWidth: 768
    };

    public constructor(private instaService: InstaService) {
    }

    items: any[];

    public ngOnInit(): void {
        this.instaService.loadFeed().subscribe(res => {
            res.forEach(item => {
                this.imageSources.push(item)
            })
        })
    }


}