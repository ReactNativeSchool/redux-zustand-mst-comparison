import { types, Instance } from "mobx-state-tree";

const Product = types.model({
  sku: types.string,
  name: types.string,
  image: types.string,
});

// Model and type our data with mobx state tree
const CartStore = types
  .model("CartStore", {
    products: types.array(Product),
    cart: types.map(types.number),
  })
  // Actions to mutate the state
  .actions((store) => ({
    addToCart(sku: string) {
      store.cart.set(sku, 1);
    },
    removeFromCart(sku: string) {
      store.cart.delete(sku);
    },
  }))
  // Views are like selectors
  .views((self) => ({
    get productsInCart() {
      return self.products.filter((product) => self.cart.get(product.sku));
    },
  }));

type CartStoreType = Instance<typeof CartStore>;

// Spin up a hook to use our store and provide initial values to it
let _cartStore: CartStoreType;
export const useCart = () => {
  if (!_cartStore) {
    _cartStore = CartStore.create({
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
    });
  }

  return _cartStore;
};
