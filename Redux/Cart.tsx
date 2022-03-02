import { ScrollView } from "react-native";

import { CartRow } from "../shared/CartRow";
import { useAppSelector, removeFromCart, useAppDispatch } from "./store";

export const Cart = () => {
  const products = useAppSelector((state) => state.cart.products);
  const cart = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();

  const productsInCart = products.filter((product) => cart[product.sku]);

  return (
    <ScrollView>
      {productsInCart.map((product) => (
        <CartRow
          key={product.sku}
          sku={product.sku}
          image={product.image}
          name={product.name}
          onRemove={() => dispatch(removeFromCart(product.sku))}
        />
      ))}
    </ScrollView>
  );
};
