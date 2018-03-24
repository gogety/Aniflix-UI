import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {Episode} from '../episode';
import {EpisodeService} from '../episode.service'

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.css']
})
export class EpisodeDetailComponent implements OnInit, OnChanges {

  clicked:boolean;
  link:string;
  message:string;
  selectedEpisode:Episode;

  @Input() episode:Episode;

  constructor(private episodeService:EpisodeService) { }

  ngOnInit() {
    this.clear();
  }

  ngOnChanges(){
    this.clear();
  }

  clear(){
    this.clicked = false;
    this.message = '';
    this.link = '';
    this.selectedEpisode = null;
  }

  toggleEpisode():void{
    
    this.clicked = !this.clicked;
    if (!this.clicked){
      this.clear();
    }
    else{
      this.selectedEpisode = this.episode;
      this.message = 'Fetching video, please wait (~10 sec) ...'
      this.episodeService.getVideoLink(this.episode)
        .subscribe(link => {
          this.link=link;
          this.message='Link fetched, video loading ...';
          }
        );
    }
  }

}
