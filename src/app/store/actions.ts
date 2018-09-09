import {Injectable} from '@angular/core'
import {Action} from '@ngrx/store'
import {Anime} from '../anime'
import { Observable } from 'rxjs/Observable';

export const LOAD_ANIMES = '[Anime] Load'
export const LOAD_ANIMES_SUCCESS = '[Anime] LoadSuccess'
export const ADD_ANIME = '[Anime] Add'
export const LOAD_MORE = '[Anime] Load More'

export class AddAnime implements Action{
    readonly type = ADD_ANIME

    constructor(public payload :Anime){}
}

export class LoadAnimes implements Action{
    readonly type = LOAD_ANIMES
}

export class LoadAnimesSuccess implements Action{
    readonly type = LOAD_ANIMES_SUCCESS

    constructor(public payload: Anime[]){}
}

export class LoadMore implements Action{
    readonly type = LOAD_MORE

    constructor(public payload: number){}
}

//should be renamed "allactions" ? 
export type Actions = AddAnime | LoadAnimesSuccess | LoadAnimes | LoadMore