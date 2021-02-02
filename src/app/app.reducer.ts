import { Action } from '@ngrx/store';
import * as fromMessage from './message.action';


export interface appState{

    text: string;
}

export const initialState = {

    text: 'LkYCo. TEST'
}

export function myReducer( state: appState = initialState , action: fromMessage.MessageActions ){

    console.log(action);

    switch(action.type){

        case fromMessage.SPANISH :
            return{
                ...state,
                text: action.payload
        }

        case fromMessage.ENGLISH :
            return{
                ...state,
                text: action.payload
        }

        default:
            return state;
    }

}