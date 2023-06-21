import { FILTER_RESOURCES } from "./types"
import { LOAD_RESOURCES } from "./types"


const experienceReducer =(state, action)=>{
    if(state === undefined){
        state={
            resources:[]
        }
    }


switch(action.type){
    case LOAD_RESOURCES:
        return{
            ...state,
            resources:action.resources
        }


    case FILTER_RESOURCES:
      return{
        ...state,
      resources: state.resources.filter(resourceObj =>{
            return resourceObj.category === action.category
        })
      }   


      default:
        return state
}


}

export default experienceReducer