import create from "zustand";

type Product = { sku: string; name: string; image: string };

type CartState = {
  products: Product[];
  cart: { [sku: string]: number };
  addToCart: (sku: string) => void;
  removeFromCart: (sku: string) => void;
};

// Selectors
export const selectProductsInCart = (state: CartState) =>
  state.products.filter((product) => state.cart[product.sku]);

export const useCart = create<CartState>((set) => ({
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
  addToCart: (sku: string) =>
    set((state) => {
      return { cart: { ...state.cart, [sku]: 1 } };
    }),
  removeFromCart: (sku: string) =>
    set((state) => {
      const nextCart = { ...state.cart };
      delete nextCart[sku];
      return { cart: nextCart };
    }),
}));
