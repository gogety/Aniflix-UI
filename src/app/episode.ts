import { Source } from './source'

export class Episode {
  id: string;
  anime: string;
  imgURL: string;
  title: string;
  fullTitle: string;
  sourceRepoLinks: Source[];
  detailsURL: string;
  constructor (epi:Episode){
    this.id = epi.id
    this.anime = epi.anime
    this.imgURL = epi.imgURL
    this.title = epi.title
    this .fullTitle = epi.fullTitle
    this.sourceRepoLinks = epi.sourceRepoLinks
    this.detailsURL = epi.detailsURL
  }

    update(epi: Episode) {
    this.sourceRepoLinks = epi.sourceRepoLinks;
  }
}