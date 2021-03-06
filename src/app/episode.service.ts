import { Injectable } from '@angular/core';
import {EPISODES} from './mock-episodes';
import {Episode} from './episode';
import {Observable} from 'rxjs/Observable'
import {Subject} from 'rxjs/Subject';
import {of} from 'rxjs/observable/of'
import {MessageService} from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable()
export class EpisodeService {

  private episodesUrl = `${environment.apiURI}/api/episodes`
 //private episodesUrl = "http://localhost:60327/api/episodes/"
  private  test:Observable<Episode[]>;
  private selectedEpisode = new Subject<Episode>();

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  getEpisodes():Observable<Episode[]>{
    this.log('Fetching Episodes');
    //return of(EPISODES);
    
    this.test = this.http.get<Episode[]>(this.episodesUrl)
      .pipe(
        tap(episodes => this.log(`fetched episodes`)),
        catchError(this.handleError('getEpisodes', []))
      );

     return this.test;
  }

  setSelectedEpisode(episode:Episode){
    this.selectedEpisode.next(episode) ;
  }

  getSelectedEpisode():Subject<Episode>{
    return this.selectedEpisode;
  }

  // getEpisode(id:number):Observable<Episode>{
  //   this.log(`Fetching episode with id =${id}`)
  //   return of(EPISODES.find(hero=> hero.id===id));
  // }

  getEpisode(episode:Episode):Observable<Episode>{
    this.log(`Fetching Episode ${episode.id} details`);
    var fullEpisode:Observable<Episode>
    fullEpisode = this.http.get<Episode>(`${this.episodesUrl}/${episode.id}`)
      .pipe(
        tap(epi=> this.log(`fetched episode ${episode.fullTitle}`)),
        catchError(this.handleError(`getEpisode`, episode))
      );

    return fullEpisode;

  }

  updateEpisode(episodeOrig:Episode, episodeUpdated:Episode){
    episodeOrig.sourceRepoLinks = episodeUpdated.sourceRepoLinks;
  }

  getVideoLink(episode:Episode, repoLinkId:string):Observable<string>{
    this.log(`Fetching video link for episode ${episode.title} ${episode.id}`);
    return this.http.get<string>(`${this.episodesUrl}/${episode.id}?repoLinkId=${repoLinkId}`)
      .pipe(
        tap(link => this.log(`fetched link`)),
        catchError(this.handleError('getVideoLink',''))
      )
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  private log (message:string){
    this.messageService.add(message);
  }
}
