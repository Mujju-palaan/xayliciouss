import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { 
        id: 1, 
        image: '/home/items.png',
        title: "mujju", 
        description: "", 
        price: "2.99",
        quantity: 4, 
    }
],
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItemsToCart: (state, action) => {
        const existing = state.items.find((item)=> item.id  === action.payload.id)

        if (existing){
            existing.quantity +=1;
        }else{
            state.items.push({
                id : payload.id,
                image: payload.image,
                title: payload.title,
                description: payload.describe,
                price: payload.price,
                quantity: 1
            })
        }
    }

  },
});

export const { addItemsToCart } = itemsSlice.actions;
export default itemsSlice.reducer;
