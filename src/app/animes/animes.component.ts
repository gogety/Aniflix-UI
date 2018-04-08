import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../anime.service';
import {Anime} from '../anime';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})
export class AnimesComponent implements OnInit {
  private selectedAnime:Anime;
  private animesCache:Map<string, Anime>;

  constructor(private animeService:AnimeService) { }

  ngOnInit() {
    this.animesCache = new Map<string, Anime>();
    this.getAnimes();
  }

  getAnimes(){
    this.animeService.getAnimes()
      .subscribe(animes => {
        this.addOrUpdateToCache(animes);
      });
    this.animeService.getAnimes()
      .subscribe(animes => {
        this.addOrUpdateToCache(animes);
      });
  }

  addOrUpdateToCache(animes:Anime[]){
    let ani:Anime;
    animes.forEach(anime => {
      if (!this.animesCache.has(anime.id)){
        this.animesCache.set(anime.id,anime);
      }
      else{
        ani=this.animesCache.get(anime.id);
        ani.update(anime);
      }
    });
  }

  onSelect (anime:Anime):void {
    if (this.selectedAnime == anime){
      this.selectedAnime = null;
    }
    else{
      this.selectedAnime = anime;
    }
  }

}
