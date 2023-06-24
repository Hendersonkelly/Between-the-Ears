import { FILTER_RESOURCES } from "../reducers/types"
import { LOAD_RESOURCES } from "../reducers/types"


export const loadResources =(resources)=>{
    return{
        type:LOAD_RESOURCES,
        resources: resources
    }
}

export const filterResources = (filter)=>{

    return{
        type: FILTER_RESOURCES,
        category: filter
    }
}