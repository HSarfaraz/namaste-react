import { configureStore } from "@reduxjs/toolkit";
import createSlice from "./createSlice";

const store = configureStore({
  reducer: {
    cart: createSlice,
  },
});

export default store;

/** Step in redux
 *
 * 1. Created the store, using configureStore form redux toolkit
 * 2. Provided my store the app, <Provider store= { store } > </Provider>
 * 3. Created the Slice, using createSlice form redux toolkit
 * 4. Put that slice into store
 */
