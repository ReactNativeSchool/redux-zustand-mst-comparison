import { ScrollView } from "react-native";

import { CartRow } from "../shared/CartRow";
import { useCart, selectProductsInCart } from "./store";

export const Cart = () => {
  const { removeFromCart } = useCart();
  const productsInCart = useCart(selectProductsInCart);

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
