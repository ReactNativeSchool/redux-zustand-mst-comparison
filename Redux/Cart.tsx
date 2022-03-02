import { ScrollView } from "react-native";

import { CartRow } from "../shared/CartRow";
import {
  useAppSelector,
  removeFromCart,
  useAppDispatch,
  selectProductsInCart,
} from "./store";

export const Cart = () => {
  const dispatch = useAppDispatch();
  const productsInCart = useAppSelector(selectProductsInCart);

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
