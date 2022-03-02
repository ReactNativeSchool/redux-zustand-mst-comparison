import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Slices
// Definee the shape of the state and how to mutate it
type ICart = { [sku: string]: number };
const cartInitialState: ICart = {};
const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addToCart: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        [action.payload]: 1,
      };
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const nextCart = { ...state };
      delete nextCart[action.payload];
      return { ...nextCart };
    },
  },
});

type IProduct = { sku: string; name: string; image: string };
const productsInitialState: IProduct[] = [
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
];
const productsSlice = createSlice({
  name: "products",
  initialState: productsInitialState,
  reducers: {},
});

// Actions
// Export actions to be used in components
export const { addToCart, removeFromCart } = cartSlice.actions;

// Selectors
// Export selectors to grab data in components
export const selectProductsInCart = (state: RootState) =>
  state.products.filter((product) => state.cart[product.sku]);

// Store
export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    products: productsSlice.reducer,
  },
});

// Hooks
// This is here because we're using TypeScript
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
