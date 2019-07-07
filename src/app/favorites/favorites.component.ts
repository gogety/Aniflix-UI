import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../anime.service';
import { FavoriteService } from '../favorites.service';
import { Anime } from '../anime';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  private selectedAnime: Anime;
  public animes: Anime[];

  constructor(private animeService: AnimeService, private favoriteService: FavoriteService) { }

  ngOnInit() {
    this.animes = [];
    this.addOrUpdateToCache(this.favoriteService.getFavorites());
    this.selectedAnime = null
    this.animeService.getSelectedAnime().subscribe({
      next: ani => this.selectedAnime = ani
    })
    this.favoriteService.getFavoriteSteam().subscribe({
      next: ani => this.addOrUpdateToCacheIndividual(ani)
    })
  }

  addOrUpdateToCache(animes:Anime[]){
    //debugger
    animes.forEach(anime => {
      this.addOrUpdateToCacheIndividual(anime);
    });
  }

  addOrUpdateToCacheIndividual(anime: Anime) {
    if (!anime)
      return;
    //debugger
    let ani: Anime;
    ani = this.animes.find(x => x.id == anime.id)
    if (!ani) {
      ani = new Anime(anime);
      this.animes.push(ani);
    }
    else {
      debugger
      ani.update(anime);
    }
  }

  onSelect(anime: Anime): void {
    if (this.selectedAnime == anime) {
      this.animeService.setSelectedAnime(null)
    }
    else {
      //this.selectedAnime = anime;
      this.animeService.setSelectedAnime(anime)

      if (!anime.fullyLoaded)
        this.animeService.getAnime(anime)
          .subscribe(fullAnime => {
            this.addOrUpdateToCacheIndividual(fullAnime);
          });
    }
  }

  resetFavorites():void{
    this.favoriteService.clearFavorites();
    this.animes = [];
  }
}

