import { Injectable } from '@angular/core';
import { Favorite } from './favorite';
import { Anime } from './anime';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private favorites: Anime[]

  private favoriteStream: Subject<Anime>

  constructor() {
    this.favoriteStream = new Subject<Anime>();
    this.favoriteStream.subscribe({
      next: ani => {
        this.favorites.push(ani);
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
        this.favoriteStream.forEach(element => {
          element.fullyLoaded = false;
        });
      }}
      );
    this.favorites = [];
    let favs = JSON.parse(localStorage.getItem('favorites'));
    debugger;
    favs.forEach( (fav:Anime) => {
      this.favorites.push(new Anime(fav));
    });
  }

  getFavorites(): Anime[] {
    return this.favorites;
  }

  getFavoriteSteam(): Subject<Anime> {
    return this.favoriteStream;
  }

  // can I subscribe to my favoritestream to push to favorites ?
  addFavorite(anime: Anime) {
    this.favoriteStream.next(anime);
  }

  clearFavorites(){
    this.favorites = [];
    localStorage.setItem('favorites', '[]');
  }
}
