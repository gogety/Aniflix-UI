import {Episode} from './episode';

export class Anime {
  id : string;
  title: string;
  imgUrl: string;
  episodes: Episode[];
  fullyLoaded: boolean;

  constructor (ani:Anime){
    this.id = ani.id;
    this.title = ani.title;
    this.imgUrl = ani.imgUrl;
    this.episodes = ani.episodes;
    this.fullyLoaded = ani.fullyLoaded;
  };

  update(ani:Anime){ 
    this.episodes = ani.episodes;
  };

  /**
   * name
   */
}