import { Component, OnInit, Inject, HostListener } from '@angular/core';
import {DOCUMENT} from '@angular/common';
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
  //private animesCache:Map<string, Anime>;
  public animes:Anime[];
  //public animes: Observable<Anime[]>;

  constructor(private animeService:AnimeService, private store: Store<AppState>,@Inject(DOCUMENT) document) { 
  }

  ngOnInit() {
     this.animes=[];
    // this.animesCache = new Map<string, Anime>();
     this.getAnimes();
     debugger
     var ani = new Anime(this.animes[0]);
    //this.animes = this.store.select('anime');
   // debugger;
   // this.store.dispatch(new AnimeActions.LoadAnimes);
   
    
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 150) {
       let element = document.getElementById('sidebar');
       element.classList.add('sticky');
     } else {
      let element = document.getElementById('sidebar');
        element.classList.remove('sticky'); 
     }
  }

  getAnimes(){
    this.animeService.getAnimes(0)
      .subscribe(animes => {
        debugger;
        this.addOrUpdateToCache(animes);
      });
    //this.animeService.getAnimes(0)
     // .subscribe(animes => {
      //  debugger;
      //  this.addOrUpdateToCache(animes);
      //});
  }

  getMore(muchMore:boolean){
    if (muchMore){
      //this.store.dispatch(new AnimeActions.LoadMore(2));
      this.animeService.getAnimes(2)
        .subscribe(animes => {
          debugger;
          this.addOrUpdateToCache(animes);
        });
    }

    else{
           // this.store.dispatch(new AnimeActions.LoadMore(1));
      this.animeService.getAnimes(1)
          .subscribe(animes => {
            debugger;
            this.addOrUpdateToCache(animes);
          });
      }
  }

  addOrUpdateToCache(animes:Anime[]){
    let ani:Anime;
    debugger
    animes.forEach(anime => {
      //if (!this.animesCache.has(anime.id)){
        ani = this.animes.find(x => x.id == anime.id)
        if (!ani){
        debugger
        ani = new Anime(anime);
       // this.animesCache.set(anime.id,ani);
        this.animes.push(ani);
      }
      else{
        //ani=this.animesCache.get(anime.id);
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
      if (!anime.fullyLoaded)
        this.animeService.getAnime(anime)
        .subscribe(fullAnime => {
          debugger;
          this.addOrUpdateToCache([fullAnime]);
        });
    }
  }

  

}
