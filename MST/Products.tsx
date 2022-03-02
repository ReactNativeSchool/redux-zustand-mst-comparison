import { ScrollView, SafeAreaView } from "react-native";
import { observer } from "mobx-react-lite";

import { useCart } from "./store";
import { ProductCard } from "../shared/ProductCard";

export const Products = observer(() => {
  const { products, cart, addToCart, removeFromCart } = useCart();

  return (
    <ScrollView>
      <SafeAreaView>
        {products.map((product) => (
          <ProductCard
            key={product.sku}
            {...product}
            isInCart={cart.get(product.sku) !== undefined}
            onRemove={removeFromCart}
            onAdd={addToCart}
          />
        ))}
      </SafeAreaView>
    </ScrollView>
  );
});
