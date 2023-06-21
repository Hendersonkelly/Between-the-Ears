import { LOAD_RIDES } from "../reducers/types";
import { FILTER_RIDES } from "../reducers/types";

export const loadRides =(data)=>{
    
    return{
        type: LOAD_RIDES,
        rideList: data
    }
}


export const filterRides = (filter)=>{
    console.log(filter);
    return{
        type: FILTER_RIDES,
        description: filter
    }
}