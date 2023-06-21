import { SEARCH_CHARACTERS }  from "./types";

const movieReducer = (state, action)=>{
    if(state === undefined){
        state={
            characters:{}
        }
    }


switch(action.type){
    case SEARCH_CHARACTERS:
        console.log(action.characters, "data coming in");
let char = {}

if(action.characters.length && action.characters.length >0){
    char = action.characters[0]
}
else{
char = action.characters
}

    
        return{
            ...state,


            characters: char
        }

        default: 
            return state
}




}
export default movieReducer