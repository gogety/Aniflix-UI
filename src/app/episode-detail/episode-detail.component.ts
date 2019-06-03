import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {Episode} from '../episode';
import {EpisodeService} from '../episode.service'

import { Source } from '../source';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.css']
})
export class EpisodeDetailComponent implements OnInit, OnChanges {

  //clicked:boolean;
  link:string;
  message:string;
  episode:Episode;
  source:Source;

 // @Input() episode:Episode;


  constructor(private episodeService:EpisodeService) { }

  ngOnInit() {
    this.source =null;
    this.episodeService.getSelectedEpisode().subscribe({
      next: (ep) => {
        this.link = null;
        this.episode = ep;
        if(ep){
          if (ep.sourceRepoLinks && ep.sourceRepoLinks.length >0){
            this.fetchLink(ep.sourceRepoLinks[0].id);     
          }
          else{
            debugger
            this.episodeService.getEpisode(ep)
            .subscribe(epi => {
              this.episodeService.updateEpisode(ep,epi);
              // this.source = ;
              this.fetchLink(ep.sourceRepoLinks[0].id);
            })     
          }
        }
      }
    });
  }


  //is this still necessary ?
  ngOnChanges(){
    this.link = null;
    // this.fetchLink();
  }

  selectSource(src:string){
    debugger
    // this.source = src;
    this.fetchLink(src);
  }

  fetchLink(id:string){
    //debugger;
    this.message = 'Fetching video, please wait (~10 sec) ...';
    this.episodeService.getVideoLink(this.episode, id)
        .subscribe(link => {
          this.link=link;
          this.message='Link fetched, video loading ...';
          }
        );
  }

  close(){
    this.source=null;
    this.link = null;
    this.episodeService.setSelectedEpisode(null);
  }

  // clear(){
  //   this.clicked = false;
  //   this.message = '';
  //   this.link = '';
  //   this.selectedEpisode = null;
  // }

  // toggleEpisode():void{
    
  //   this.clicked = !this.clicked;
  //   if (!this.clicked){
  //     this.clear();
  //   }
  //   else{
  //     this.selectedEpisode = this.episode;
  //     this.message = 'Fetching video, please wait (~10 sec) ...'
  //     this.episodeService.getVideoLink(this.episode)
  //       .subscribe(link => {
  //         this.link=link;
  //         this.message='Link fetched, video loading ...';
  //         }
  //       );
  //   }
  //}

}
