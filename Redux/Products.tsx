import { ScrollView, SafeAreaView } from "react-native";

import { ProductCard } from "../shared/ProductCard";
import {
  useAppSelector,
  addToCart,
  removeFromCart,
  useAppDispatch,
} from "./store";

export const Products = () => {
  const products = useAppSelector((state) => state.cart.products);
  const cart = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();

  return (
    <ScrollView>
      <SafeAreaView>
        {products.map((product) => (
          <ProductCard
            key={product.sku}
            {...product}
            isInCart={cart[product.sku] !== undefined}
            onRemove={() => dispatch(removeFromCart(product.sku))}
            onAdd={() => dispatch(addToCart(product.sku))}
          />
        ))}
      </SafeAreaView>
    </ScrollView>
  );
};
