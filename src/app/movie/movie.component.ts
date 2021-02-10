import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IMovie } from "../shared/movie";
import { ShowService } from "../shared/show.service";

@Component({
    selector : 'pm-movie' ,
    templateUrl : './movie.component.html',
    styleUrls : ['./movie.component.css']
})
export class MovieComponent{
    title : string;
    movies : IMovie[];

    constructor(private showService : ShowService,private route:ActivatedRoute)
    {
        this.movies = showService.getMovies();
        this.title=route.snapshot.paramMap.get("type");
    }

}