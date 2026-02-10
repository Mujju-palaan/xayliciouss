import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItemsToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 0) + 1;
      } else {
        const item = {
          id: action.payload.id,
          image: action.payload.image,
          title: action.payload.title,
          description: action.payload.description || "",
          price: Number(action.payload.price),
          quantity: 1,
        };
        state.items.push(item);
        console.log(item);
      }
    },

    IncreaseQuantity:(state, action) => {
      const item = state.items.find((item)=> item.id === action.payload.id)
      if(item){
        item.quantity += 1
      }
    },

    DecreaseQuantity:(state, action) => {
      const item = state.items.find((item)=> item.id === action.payload.id)
      if(item){
        item.quantity -= 1
      }
    },
    RemoveFromCart: (state, action) => {
      state.items = state.items.filter((item)=> item.id !== action.payload.id)
    },

  },
});

export const { addItemsToCart, IncreaseQuantity, DecreaseQuantity, RemoveFromCart} = itemsSlice.actions;

export default itemsSlice.reducer;
