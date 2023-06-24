
import {combineReducers} from 'redux'
import resourcesCart from './resourcesCart'
import ridesData from './ridesData'
import movieReducer from './movieReducer'
import experienceReducer from './experienceReducer'


const rootReducer = combineReducers({

    rides: ridesData, 
    cart: resourcesCart,
    characters: movieReducer,
    resources: experienceReducer
})


export default rootReducer