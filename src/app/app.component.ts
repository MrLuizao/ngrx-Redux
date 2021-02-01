import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appState } from './app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data$: Observable<any>;

  constructor(private store: Store<appState>){

    this.data$ = store.select('message');

  }

  spanishMsg(){
    this.store.dispatch( {
      type: "SPANISH"
    });

  }

  englishMsg(){
    this.store.dispatch( {
      type: "ENGLISH"
    });
  }

  
}
