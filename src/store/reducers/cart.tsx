import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Item[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload)
    },
    removeToCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    openCart: (state) => {
      state.isOpen = true
    },
    closeCart: (state) => {
      state.isOpen = false
    },
    clearCart: (state) => {
      state.items = []
    }
  }
})

export const { addToCart, removeToCart, openCart, closeCart, clearCart } =
  cartSlice.actions
export default cartSlice.reducer
