import { Component } from '@angular/core';
import{Store} from '@ngrx/store'
import{AppState} from './store/appstate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AniFlix';

 // constructor(private store:Store<AppState>){}
}
