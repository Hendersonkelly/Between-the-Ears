import { LOAD_RIDES } from "./types";

export const loadRides =(data)=>{
    console.log(data);
    return{
        type: LOAD_RIDES,
        rideList: data
    }
}