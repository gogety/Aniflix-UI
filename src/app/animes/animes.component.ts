import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { AnimeService } from '../anime.service';
import {Anime} from '../anime';
import { FavoriteService } from '../favorites.service';

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

  constructor(private animeService:AnimeService, private favoriteService:FavoriteService) { 
  }

  ngOnInit() {
     this.animes=[];
    // this.animesCache = new Map<string, Anime>();
     this.getAnimes();
     //debugger
    //  var ani = new Anime(this.animes[0]);
    this.selectedAnime = null
    this.animeService.getSelectedAnime().subscribe({
      next: ani => this.selectedAnime = ani
    })
    //this.animes = this.store.select('anime');
   // //debugger;
   // this.store.dispatch(new AnimeActions.LoadAnimes);
   
    
  }


  getAnimes(){
    this.animeService.getAnimes(0)
      .subscribe(animes => {
        //debugger;
        this.addOrUpdateToCache(animes);
      });
    //this.animeService.getAnimes(0)
     // .subscribe(animes => {
      //  //debugger;
      //  this.addOrUpdateToCache(animes);
      //});
  }

  getMore(muchMore:boolean){
    if (muchMore){
      //this.store.dispatch(new AnimeActions.LoadMore(2));
      this.animeService.getAnimes(2)
        .subscribe(animes => {
          //debugger;
          this.addOrUpdateToCache(animes);
        });
    }

    else{
           // this.store.dispatch(new AnimeActions.LoadMore(1));
      this.animeService.getAnimes(1)
          .subscribe(animes => {
            //debugger;
            this.addOrUpdateToCache(animes);
          });
      }
  }

  addOrUpdateToCache(animes:Anime[]){
    let ani:Anime;
    //debugger
    animes.forEach(anime => {
      //if (!this.animesCache.has(anime.id)){
        ani = this.animes.find(x => x.id == anime.id)
      if (!ani){
        //debugger
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
      //this.selectedAnime = null;
      this.animeService.setSelectedAnime(null)
    }
    else{
      //this.selectedAnime = anime;
      this.animeService.setSelectedAnime(anime)

      if (!anime.fullyLoaded)
        this.animeService.getAnime(anime)
        .subscribe(fullAnime => {
          //debugger;
          this.addOrUpdateToCache([fullAnime]);
        });
    }
  }

  

}
