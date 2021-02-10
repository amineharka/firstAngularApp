import { Component } from "@angular/core";
import { ISerie } from './shared/serie';
import { IMovie } from './shared/movie';
import { ShowService } from './shared/show.service';

@Component({
  selector : 'pm-root' ,
  templateUrl : './app.component.html' ,
  styleUrls : ['./app.component.css']
})
export class AppComponent{

  

  myFunction() : void{
    var x=document.getElementById("topNav");
    if (x.className === "") {
      x.className += "responsive";

    } else {
      x.className = "";
    }
  }
}
