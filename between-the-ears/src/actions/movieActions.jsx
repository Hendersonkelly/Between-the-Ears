import { SEARCH_CHARACTERS } from "./types";

export const searchCharacter =(data)=>{
    return{
        type: SEARCH_CHARACTERS,
        characters: data
    }
}