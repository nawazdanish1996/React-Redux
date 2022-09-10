import { ADD_TO_CART } from "../Contants";

const initialState={
    cardData:[]
}

function cardItems (state=initialState, action)
{
    // eslint-disable-next-line default-case
    switch(action.type){
        case ADD_TO_CART:
            return{
                ...state,
                cardData:action.data
            }
            break;
            default:
                return: state
    }
}

export default cardItems;