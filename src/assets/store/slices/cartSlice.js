import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const index = state.cart.findIndex((item) => item.id === action.payload);

      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
    clearCart: (state, action) => {
      state.cart = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { reducer: cartReducer, actions: cartActions } = cartSlice;


export const selectCartItems = (state) => state.cartStore.cart;

export const selectTotalPrice = (state) => {
  const cartItems = selectCartItems(state);

  return cartItems.reduce((total, item) => total + parseInt(item.price), 0);
};