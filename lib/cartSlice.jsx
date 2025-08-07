import { createSlice } from "@reduxjs/toolkit"

//for manage basket state and actions
const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items: [], //array of(id, text, price...)
    },
    reducers:{
        //add or chnge exist
        addToCart: (state, action) =>{
            const item = action.payload;
            const existingItem = state.items.find((i) => i.id ===item.id)
            if(existingItem){existingItem.quantity+=1;

            }else{
                state.items.push({...item, quantity: 1})
            }
        },
        removeFromCart: (state, action) => {
            const itemId = action.payload
            state.items = state.items.filter((item)=> item.id !== itemId)
        },
        updateQuantity: (state, action) => {
            const {id, quantity} = action.payload;
            const item = state.items.find((i) => i.id ===id);
            if(item && quantity>=1){
                item.quantity = quantity;
            }
            
        }
    }
});
//export actions and reducers for use in redux store
export const {addToCart, removeFromCart, updateQuantity} = cartSlice.actions;
export default cartSlice.reducer;