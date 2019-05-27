import {Episode} from './episode';

export class Anime {
  id : string;
  title: string;
  imgUrl: string;
  episodes: Episode[];
  fullyLoaded: boolean;
  description: string;

  constructor (ani:Anime){
    this.id = ani.id;
    this.title = ani.title;
    this.imgUrl = ani.imgUrl;
    this.episodes = ani.episodes;
    this.fullyLoaded = ani.fullyLoaded;
    this.description = ani.description;
  };

  update(ani:Anime){ 
    this.episodes = ani.episodes;
    this.description = ani.description;
  };

  /**
   * name
   */
}