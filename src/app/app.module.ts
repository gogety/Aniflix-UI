import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';

import { EpisodeService } from './episode.service';
import {AnimeService} from './anime.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';

import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from 'selenium-webdriver/http';
import { AnimesComponent } from './animes/animes.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EpisodesComponent,
    EpisodeDetailComponent,
    MessagesComponent,
    AnimesComponent,
    AnimeDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    EpisodeService,
    MessageService,
    AnimeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
