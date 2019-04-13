import { Component, HostListener, Inject } from '@angular/core';
import{Store} from '@ngrx/store'
import{AppState} from './store/appstate';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AniFlix';

  constructor(@Inject(DOCUMENT) document){}

    @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 150) {
       let element = document.getElementById('sidebar');
       element.classList.add('sticky');
     } else {
      let element = document.getElementById('sidebar');
        element.classList.remove('sticky'); 
     }
  }


 // constructor(private store:Store<AppState>){}
}
