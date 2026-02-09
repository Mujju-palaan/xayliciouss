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
  },
});

export const { addItemsToCart } = itemsSlice.actions;

export default itemsSlice.reducer;
