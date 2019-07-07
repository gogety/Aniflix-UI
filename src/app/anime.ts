import {Episode} from './episode';

export class Anime {
  id : string;
  title: string;
  homeUrl: string;
  imgUrl: string;
  episodes: Episode[];
  fullyLoaded: boolean;
  description: string;

  constructor (ani:Anime){
    this.id = ani.id;
    this.title = ani.title;
    this.imgUrl = ani.imgUrl;
    this.fullyLoaded = ani.fullyLoaded;
    this.description = ani.description;
    this.homeUrl = ani.homeUrl;
    this.episodes = [];
    ani.episodes.forEach(episode => {
      this.episodes.push(new Episode(episode));
    });
  }

  update(ani:Anime){ 
    this.description = ani.description;
    this.updateEpisodes(ani.episodes);
  };

  updateEpisodes(episodes:Episode[]){
    let epi:Episode;
    episodes.forEach(episode => {
        epi = this.episodes.find(x => x.id == episode.id)
      if (!epi){
        //debugger
        epi = new Episode(episode);
       // this.animesCache.set(anime.id,ani);
        this.episodes.push(epi);
      }
      else{
        //ani=this.animesCache.get(anime.id);
        epi.update(episode);
      }
    });
  }

  /**
   * name
   */
}