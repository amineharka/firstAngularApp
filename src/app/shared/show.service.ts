import { Injectable } from "@angular/core";
import { IMovie } from "./movie";
import { ISerie } from './serie';
import { IAnime } from './anime';

@Injectable({
    providedIn : 'root'
})
export class ShowService{
    series : ISerie[]=[
        {id:1 ,name :'Narcos',imageUrl :'../assets/images/series/narcos.jpg' , year :2011 , language : 'english' },
        {id:2 ,name :'Breaking Bad',imageUrl : '../assets/images/series/breaking.jpg' , year : 2008 , language : 'english' },
        {id:3 ,name :'Game Of Thrones',imageUrl : '../assets/images/series/got.jpg' , year : 2011 , language : 'english' },
        {id:4 ,name :'The Sopranos',imageUrl : '../assets/images/series/sopranos.jpg' , year : 1999 , language : 'english' },
        {id:5 ,name :'13 reasons why',imageUrl : '../../assets/images/series/reasons.jpg' , year : 2017 , language : 'english' }
    ]

    movies : IMovie[] = [
        {id:1 ,name :'Fight Club',imageUrl :'../assets/images/movies/fight.jpg' , year :1999 , language : 'english' },
        {id:2 ,name :'Forrest Gump',imageUrl : '../assets/images/movies/forrest.jpg' , year : 1994 , language : 'english' },
        {id:3 ,name :'Inception',imageUrl : '../assets/images/movies/inception.jpg' , year : 2010 , language : 'english' },
        {id:4 ,name :'Joker',imageUrl : '../assets/images/movies/joker.jpg' , year : 2019 , language : 'english' }

    ]
    animes : IAnime[] = [
        {id:1 ,name :'One Punch Man',imageUrl :'../assets/images/animes/punch.jpg' , year :1999 , language : 'Japan' },
        {id:2 ,name :'Dragon Ball Z',imageUrl : '../assets/images/animes/dragon.jpg' , year : 1994 , language : 'Japan' },
        {id:3 ,name :'akame ga kill',imageUrl : '../assets/images/animes/kami.png' , year : 2010 , language : 'Japan' },
        {id:4 ,name :'akame ga kill',imageUrl : '../assets/images/animes/kami.png' , year : 2010 , language : 'Japan' }

    ]

    getSeries() : ISerie[]
    {
        return this.series;
    }

    getMovies() : IMovie[]
    {
        return this.movies ;
    }

    getAnimes() :IAnime[]
    {
        return this.animes ;
    }
}