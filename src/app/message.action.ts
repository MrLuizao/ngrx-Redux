import { Action } from '@ngrx/store';

export const SPANISH = '[Message] Spanish'; 
export const ENGLISH = '[Message] English'; 

export class SpanishMessage implements Action {
    readonly type = SPANISH;

    constructor(public payload: String){
    }
}

export class EnglishMessage implements Action {
    readonly type = ENGLISH;

    constructor(public payload: String){       
    }
}


export type MessageActions = SpanishMessage | EnglishMessage;

