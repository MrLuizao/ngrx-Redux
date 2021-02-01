import { Action } from '@ngrx/store';


export interface appState{

    text: string;
}

export const initialState = {

    text: 'LkYCo. TEST'
}

export function myReducer( state: appState = initialState , action: Action){

    console.log(action);

    switch(action.type){

        case "SPANISH":
            return{
                ...state,
                text: "Hola Mundo!"
        }

        case "ENGLISH":
            return{
                ...state,
                text: "Hello World!"
        }

        default:
            return state;
    }

    return state;

}