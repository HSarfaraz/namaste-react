import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      // state.items.splice(action.payload, 1);
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer; //we mention reducer, as it will combine all reducers
