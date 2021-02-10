import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ISerie } from "../shared/serie";
import { ShowService } from "../shared/show.service";

@Component({
    selector : 'pm-serie' ,
    templateUrl : './serie.component.html',
    styleUrls : ['./serie.component.css']
})
export class SerieComponent{
    title : string;
    series : ISerie[];

    constructor(private showService : ShowService,private route:ActivatedRoute)
    {
        this.series = showService.getSeries();
        this.title=route.snapshot.paramMap.get("type");
    }

}