import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appState } from './app.reducer';
import * as fromMessage from './message.action';

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
    this.store.dispatch( new fromMessage.SpanishMessage('Hola Mundo!'));

  }

  englishMsg(){
    this.store.dispatch( new fromMessage.EnglishMessage('Hellow World!'));
  }

  
}
