import { ScrollView } from "react-native";

import { CartRow } from "../shared/CartRow";
import { useCart } from "./store";

export const Cart = () => {
  const { cart, products, removeFromCart } = useCart();

  const productsInCart = products.filter((product) => cart[product.sku]);

  return (
    <ScrollView>
      {productsInCart.map((product) => (
        <CartRow
          key={product.sku}
          sku={product.sku}
          image={product.image}
          name={product.name}
          onRemove={removeFromCart}
        />
      ))}
    </ScrollView>
  );
};
