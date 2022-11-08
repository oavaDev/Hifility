import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
const initialState = {
  items: [],
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addToOrder: (state, action) => {
      state.items = [...state.items, action.payload];
    },

    removeFromOrder: (state, action) => {
      const index = state.items.findIndex(
        (orderItem) => orderItem.id === action.payload.id
      );
      let newOrder = [...state.items];
      if (index >= 0) {
        //the item exists in order; remove it
        newOrder.splice(index, 1); //(position, number of item to delete)
      } else {
        console.warn(
          `can not remove item(id: ${action.payload.id}) as its not in the order`
        );
      }
      state.items = newOrder;
    },
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.order,
        };
      },
    },
  },
});

export const { addToOrder, removeFromOrder } = orderSlice.actions;

export const selectItems = (state) => state.order.items;
export const selectTotal = (state) =>
  state.order.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
export default orderSlice.reducer;
