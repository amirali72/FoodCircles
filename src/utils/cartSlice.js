import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },

        removeCart: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter((item) => item.id !== itemId);
        },

        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addItem, removeCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;