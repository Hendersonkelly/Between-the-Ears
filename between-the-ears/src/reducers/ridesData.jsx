import { LOAD_RIDES } from "../actions/types"

const ridesData = (state, action)=>{
    if(state === undefined){
        console.log("inside initial state");
        state = {
            rides: []
        }
        console.log(state.rides);
    }


    switch(action.type){

        case LOAD_RIDES:
            return{
                ...state,
                rides: action.rideList
            }

        default:
            return state
    }
    return state
}

export default ridesData