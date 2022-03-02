import { ScrollView, SafeAreaView } from "react-native";

import { ProductCard } from "../shared/ProductCard";
import { useCart } from "./store";

export const Products = () => {
  const { addToCart, removeFromCart, cart, products } = useCart();

  return (
    <ScrollView>
      <SafeAreaView>
        {products.map((product) => (
          <ProductCard
            key={product.sku}
            {...product}
            isInCart={cart[product.sku] !== undefined}
            onRemove={removeFromCart}
            onAdd={addToCart}
          />
        ))}
      </SafeAreaView>
    </ScrollView>
  );
};
