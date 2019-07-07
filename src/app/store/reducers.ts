import {Action} from '@ngrx/store'
import {Anime} from '../anime'
import * as Actions from './actions'

const initialState:Anime = {
    title : 'MyAnime',
    id : 'ABC',
    imgUrl : 'http://www.google.ca',
    episodes : [],
    description: "",
    //TODO : fix the update thingy...,
    homeUrl: 'someURL',
    fullyLoaded : false,
    update: function(){},
    updateEpisodes: function(){}
} 

export function reducer(state: Anime[] = [initialState], action: Actions.Actions){
    switch (action.type){
        case Actions.ADD_ANIME:
            return [...state, action.payload];
        case Actions.LOAD_ANIMES_SUCCESS:
            //should I just change the original state? Will that break the pure function aspect?
            //need to find a proper immutable update way ?
            //copy is a shallow copy, episodes are still the same references.
            var copy = [...state];
            action.payload.forEach(anime => {
                var index = copy.findIndex(ani => ani.id == anime.id);
                //see https://stackoverflow.com/questions/5915789/how-to-replace-an-item-in-an-array-with-javascript
                if(~index){
                    copy = copy.splice(index,1,anime); 
                }          
                else{
                    copy.push(anime);
                }
            })
            return copy;
        default:
            return state;
    }
}

