import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {Anime} from '../anime';
import {Episode } from '../episode';
import { AnimeService } from '../anime.service';
import * as AnimeActions from '../store/actions'
import { EpisodeService } from '../episode.service';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {

  // @Input() anime:Anime;
  selectedEpisode:Episode;
  anime:Anime;

  constructor(private animeService : AnimeService, private episodeService:EpisodeService) { }

  ngOnInit() {
     this.selectedEpisode = null;
    this.episodeService.getSelectedEpisode().subscribe({
      next: ep => this.selectedEpisode = ep
    })

    this.animeService.getSelectedAnime().subscribe({
      next: ani=>this.anime = ani
    })
    //this.store.dispatch(new AnimeActions.LoadAnime(this.anime));
  }

  selectEpisode(episode:Episode):void{
    //debugger;
    if (this.selectedEpisode == episode){
      this.episodeService.setSelectedEpisode(null);
    }
    else {
      this.episodeService.setSelectedEpisode(episode);
    }
  }

}
