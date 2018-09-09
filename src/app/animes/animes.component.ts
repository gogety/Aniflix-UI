import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../anime.service';
import {Anime} from '../anime';
import {AppState} from '../store/appstate'
import {Store} from '@ngrx/store'
import {Observable} from 'rxjs/Observable'
import * as AnimeActions from '../store/actions'

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})
export class AnimesComponent implements OnInit {
  private selectedAnime:Anime;
  private animesCache:Map<string, Anime>;
  //public animes:Anime[];
  public animes: Observable<Anime[]>;

  constructor(private animeService:AnimeService, private store: Store<AppState>) { 
  }

  ngOnInit() {
    // this.animes=[];
    // this.animesCache = new Map<string, Anime>();
    // this.getAnimes();
    this.animes = this.store.select('anime');
    debugger;
    this.store.dispatch(new AnimeActions.LoadAnimes);
   
    
  }

  getAnimes(){
    // this.animeService.getAnimes()
    //   .subscribe(animes => {
    //     debugger;
    //     this.addOrUpdateToCache(animes);
    //   });
    // this.animeService.getAnimes()
    //   .subscribe(animes => {
    //     debugger;
    //     this.addOrUpdateToCache(animes);
    //   });
  }

  getMore(muchMore:boolean){
    if (muchMore)
      this.store.dispatch(new AnimeActions.LoadMore(2));
    else
      this.store.dispatch(new AnimeActions.LoadMore(1));
  }

  addOrUpdateToCache(animes:Anime[]){
    // let ani:Anime;
    // animes.forEach(anime => {
    //   if (!this.animesCache.has(anime.id)){
    //     this.animesCache.set(anime.id,new Anime(anime));
    //     this.animes.push(new Anime(anime));
    //   }
    //   else{
    //     ani=this.animesCache.get(anime.id);
    //     ani.update(anime);
    //   }
    // });
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
