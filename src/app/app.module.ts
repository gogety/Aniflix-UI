import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';

import { EpisodeService } from './episode.service';
import {AnimeService} from './anime.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';

import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from 'selenium-webdriver/http';
import { AnimesComponent } from './animes/animes.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';

import {StoreModule } from '@ngrx/store';
import {reducer} from './store/reducers';
import {AnimeEffects} from './anime.effects';

import {EffectsModule} from '@ngrx/effects';
import { Effect } from '@ngrx/effects/src/effects_metadata';

@NgModule({
  declarations: [
    AppComponent,
    EpisodeDetailComponent,
    MessagesComponent,
    AnimesComponent,
    AnimeDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({anime:reducer}),
    EffectsModule.forRoot([AnimeEffects]),
    //not sure how forRoort and forFeature are different. Does not work with forFeature
    //StoreModule.forFeature('anime',reducer),
  //  EffectsModule.forFeature([AnimeEffects])
  ],
  providers: [
    EpisodeService,
    MessageService,
    AnimeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
