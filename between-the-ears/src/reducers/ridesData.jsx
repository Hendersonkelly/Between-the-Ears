import { LOAD_RIDES } from "./types"
import { FILTER_RIDES } from "./types";

const ridesData = (state, action)=>{
    if(state === undefined){
        
        state = {
            rides: []
        }
        
    }


    switch(action.type){

        case LOAD_RIDES:
            return{
                ...state,
                rides: action.rideList
            }

        case FILTER_RIDES:
            console.log(action.description, "action.description");
            const filteredRides = state.rides.filter((ride) => ride.description.includes(action.description));
            console.log(filteredRides, "filtered rides");

            return{
                ...state,
                rides: filteredRides
            }
        
            default:
            return state
    }
    return state
}

export default ridesData