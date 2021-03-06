import { Component, OnInit } from '@angular/core';
import {FavouritesService} from '../favourites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  favourites = this.favouritesService.getFavVideos();

  removeFavVideos(videoId){
    this.favouritesService.removeFavVideos(videoId);
  }


  constructor(private favouritesService: FavouritesService) { }

  ngOnInit() {
    
  }

}
