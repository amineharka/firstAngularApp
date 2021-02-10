import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IAnime } from "../shared/anime";
import { ShowService } from "../shared/show.service";

@Component({
    selector : 'pm-anime' ,
    templateUrl : './anime.component.html',
    styleUrls : ['./anime.component.css']
})
export class AnimeComponent{
    title : string;
    animes : IAnime[];

    constructor(private showService : ShowService,private route:ActivatedRoute)
    {
        this.animes = showService.getAnimes();
        this.title=route.snapshot.paramMap.get("type");
    }

}