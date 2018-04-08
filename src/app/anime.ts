import {Episode} from './episode';

export class Anime {
  id : string;
  title: string;
  imgUrl: string;
  episodes: Episode[];
//  detailsURL: string;
//   videoUrl:string;
  update(ani:Anime){
    this.episodes = ani.episodes;
  }
}