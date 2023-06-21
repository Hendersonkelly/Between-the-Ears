import { SEARCH_CHARACTERS } from "../reducers/types";

export const searchCharacter =(data)=>{
    return{
        type: SEARCH_CHARACTERS,
        characters: data
    }
}

