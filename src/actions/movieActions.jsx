import { SEARCH_CHARACTERS } from "../reducers/types";
import { ADD_CHARACTERS } from "../reducers/types";

export const searchCharacter =(data)=>{
    return{
        type: SEARCH_CHARACTERS,
        characters: data
    }
}

export const addCharacters = (data)=>{
    return{
        type: ADD_CHARACTERS,
        character:data
    }
}