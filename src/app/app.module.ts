import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';

import { EpisodeService } from './episode.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';

import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from 'selenium-webdriver/http';

@NgModule({
  declarations: [
    AppComponent,
    EpisodesComponent,
    EpisodeDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    EpisodeService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
