import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import { FavouritesService } from '../favourites.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  addtoFavourites(video) {
    console.log("Video added to Favourites");
    this.favouritesService.addtoFavourites(video);
  }

  videos: any[];

  constructor(private youTubeService: YoutubeService,private favouritesService: FavouritesService) { }

  ngOnInit() {
    this.videos = [];
    this.youTubeService
    .getVideosForChanel('UC56gTxNs4f9xZ7Pa2i5xNzg', 15)
    .pipe()
    .subscribe(lista => {
    for (let element of lista["items"]) {
    this.videos.push(element)
    }
    });
  }
}
