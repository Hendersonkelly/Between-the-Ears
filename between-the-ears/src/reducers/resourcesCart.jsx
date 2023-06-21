import { ADD_TO_CART } from "../actions/types"







const resourcesCart = (state, action)=> {
    if(state === undefined){
        state={
            cartItems: []

        }
    }



switch(action.type){

   case ADD_TO_CART:

    console.log(action.recipe);
    console.log(state.cartItems, "before add");

    let array = [...state.cartItems].concat(action.recipe)
    // console.log(array[1].split('/n')) 
    console.log(array[0].split('\n')) 
    let newArr = array[0].split('\n')

    return{
        ...state,
        cartItems: newArr
    }


    default:
        return state
}

}

export default resourcesCart