import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

type Product = { sku: string; name: string; image: string };

type CartState = {
  products: Product[];
  cart: { [sku: string]: number };
};

const initialState: CartState = {
  products: [
    {
      sku: "1",
      image:
        "https://images.unsplash.com/photo-1521483451569-e33803c0330c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1385&q=80",
      name: "Cereal",
    },
    {
      sku: "2",
      image:
        "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      name: "Eggs",
    },
    {
      sku: "3",
      image:
        "https://images.unsplash.com/photo-1627485937980-221c88ac04f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1483&q=80",
      name: "Flour",
    },
  ],
  cart: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        cart: { ...state.cart, [action.payload]: 1 },
      };
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const nextCart = { ...state.cart };
      delete nextCart[action.payload];
      return { ...state, cart: nextCart };
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
