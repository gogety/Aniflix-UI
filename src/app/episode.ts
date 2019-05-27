import {Source} from './source'

export class Episode {
    id : string;
    anime: string;
    imgURL: string;
    title: string;
    fullTitle: string;
    sourceRepoLinks: Source[];
  //  detailsURL: string;
 //   videoUrl:string;
    Update(epi:Episode){
      this.sourceRepoLinks = epi.sourceRepoLinks;
    }
}