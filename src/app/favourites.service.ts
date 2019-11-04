import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  favourites=[];
   
  addtoFavourites(video){
    this.favourites.push(video)
  }

  getFavVideos(){
    return this.favourites 
  }

  removeFavVideos(vId){
    this.favourites.splice(vId,1)
  }

  constructor() { }
  
}
