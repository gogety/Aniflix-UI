import { Component, OnInit } from '@angular/core';
import { Episode } from '../episode';
import { EPISODES} from '../mock-episodes';
import { EpisodeService } from '../episode.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  selectedEpisode: Episode;

  episodes:Episode[];

  constructor(private episodeService: EpisodeService) { }

  ngOnInit() {
    this.getEpisodes();
  }

  onSelect(episode: Episode): void {
    this.selectedEpisode = episode;
  }

  getEpisodes():void{
    this.episodeService.getEpisodes()
      .subscribe(episodes => {this.episodes = episodes; debugger;});
 
  }

}
