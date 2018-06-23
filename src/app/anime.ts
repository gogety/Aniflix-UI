import {Episode} from './episode';

export class Anime {
  id : string;
  title: string;
  imgUrl: string;
  episodes: Episode[];

  constructor (ani:Anime){
    this.id = ani.id;
    this.title = ani.title;
    this.imgUrl = ani.imgUrl;
    this.update (ani);
  }

  update(ani:Anime){
    this.episodes = ani.episodes;
  };

  /**
   * name
   */
}