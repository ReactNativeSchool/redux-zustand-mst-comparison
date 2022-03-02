import { ScrollView } from "react-native";
import { observer } from "mobx-react-lite";

import { CartRow } from "../shared/CartRow";
import { useCart } from "./store";

export const Cart = observer(() => {
  const { productsInCart, removeFromCart } = useCart();

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
});
