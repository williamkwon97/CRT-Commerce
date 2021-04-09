import { CART_ADD_ITEM } from '../constants/cartConstants';

export const CartReducers = (state={cartItems:[]}, action) => {
    switch (action.type) {
        case CART_ADD_ITEM :
            const item = action.payload
            const existItem = state.cartItems.find(x => x.product === item.product)
        default: 
            return state

    }
}