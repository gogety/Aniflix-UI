import { Injectable } from '@angular/core';
import {Anime} from './anime';
import {Observable} from 'rxjs/Observable';
import {MessageService} from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {environment} from '../environments/environment';
import {of} from 'rxjs/observable/of'

@Injectable()
export class AnimeService {
  private animesUrl = `${environment.apiURI}/api/animes`;
  private test : Observable<Anime[]>;

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getAnimes():Observable<Anime[]>{
    this.log('Fetching Animes');
    this.test = this.http.get<Anime[]>(this.animesUrl)
      .pipe(
        tap(animes=>this.log(`fetched animes`)),
        catchError(this.handleError('getAnimes',[]))
      );
     // debugger;
    return this.test;
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


