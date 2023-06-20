
import {combineReducers} from 'redux'
import resourcesCart from './resourcesCart'
import ridesData from './ridesData'
import movieReducer from './movieReducer'


const rootReducer = combineReducers({

    rides: ridesData, 
    cart: resourcesCart,
    characters: movieReducer
})


export default rootReducer