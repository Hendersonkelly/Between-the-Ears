import { SEARCH_CHARACTERS }  from "./types";
import {ADD_CHARACTERS } from "./types";

const movieReducer = (state, action)=>{
    if(state === undefined){
        state={
            characters:[]
        }
    }


switch(action.type){
    case SEARCH_CHARACTERS:
        console.log(action.characters, "data coming in");
        let char = []

        if(action.characters.length && action.characters.length >0){
            char = action.characters[0]
            console.log(char, "indide if");
        }
        else{
            char = action.characters
            console.log(char, "indie else");
        }

    
        return{
            ...state,
            characters: char
        }


    case ADD_CHARACTERS:

    let character =[]
    character = action.character
    console.log(character, "add");
    return{
        ...state,
        characters:character
    }


    

    

        default: 
            return state
}




}
export default movieReducer