import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      //console.log(`adding to basket id ${action.payload.id}`);
      state.items = [...state.items, action.payload];
      //console.log(`${state.items.length}`);
    },
    removeFromBasket: (state, action) => {
      console.log(`Trying to remove item from basket ${action.payload.id}`);
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(`index ${index}`);
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cannot remove product id ${id}, its not found in basket`);
      }
      state.items = newBasket;

      console.log(`removed item from basket with id ${action.payload.id}`);
      console.log(`${state.items.length}`);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemsWithId = (state, id) => {
  return state.basket.items.filter((item) => item.id === id);
};

export default basketSlice.reducer;
