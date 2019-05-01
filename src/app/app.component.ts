import { Component, HostListener, Inject } from '@angular/core';
import{Store, select} from '@ngrx/store'
import{AppState} from './store/appstate';
import {DOCUMENT} from '@angular/common';
import { AnimeService } from './anime.service';
import { Anime } from './anime';
import { EpisodeService } from './episode.service';
import { Episode } from './episode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AniFlix';
  selectedAnime:Anime;
  selectedEpisode:Episode;

  constructor(private animeService:AnimeService, private episodeService:EpisodeService){
  }

  ngOnInit(){
    this.animeService.getSelectedAnime().subscribe({
      next:(ani) => this.selectedAnime = ani
    });

    this.episodeService.getSelectedEpisode().subscribe({
      next:(ep) => this.selectedEpisode = ep
    });
  }
  //   @HostListener('window:scroll', ['$event'])
  // onWindowScroll(e) {
  //    if (window.pageYOffset > 150) {
  //      let element = document.getElementById('sidebar');
  //      element.classList.add('sticky');
  //    } else {
  //     let element = document.getElementById('sidebar');
  //       element.classList.remove('sticky'); 
  //    }
  // }

  clearChoices(){
    this.animeService.setSelectedAnime(null);
    this.episodeService.setSelectedEpisode(null);
  }

 // constructor(private store:Store<AppState>){}
}
