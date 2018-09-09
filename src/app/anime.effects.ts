import {Effect, Actions, ofType} from '@ngrx/effects'
import {Injectable} from '@angular/core'
import * as AnimeActions from './store/actions'
import { switchMap } from 'rxjs/operators/switchMap';
import {AnimeService} from './anime.service'
import {map} from 'rxjs/operators'
import { mergeMap } from 'rxjs/operators/mergeMap';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AnimeEffects {

    constructor(private actions$: Actions, private animeService: AnimeService){}


    //can we "subscribe" to two action types 
    @Effect()
    loadAnimes$ = this.actions$.ofType(AnimeActions.LOAD_ANIMES)
    .pipe(
        switchMap(()=>{
            return this.animeService.getAnimes(0).pipe(
                map(animes => new AnimeActions.LoadAnimesSuccess(animes))
            )
        })
    )

    @Effect()
    loadMuchMore$ : Observable<AnimeActions.Actions> =  this.actions$
    .pipe(
        ofType(AnimeActions.LOAD_MORE),
        switchMap((action:AnimeActions.LoadMore) =>{
            return this.animeService.getAnimes(action.payload).pipe(
                map(animes => new AnimeActions.LoadAnimesSuccess(animes))
            )
        })
    )
    // .pipe(
    //     switchMap(()=>{
    //         return this.animeService.getAnimes(true).pipe(
    //             map(animes => new AnimeActions.LoadAnimesSuccess(animes))
    //         )
    //     })
    // )
    
            

}