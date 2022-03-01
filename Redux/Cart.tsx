import { View, Text, Image, ScrollView, Button } from "react-native";

import styles from "../styles";
import { useAppSelector, removeFromCart, useAppDispatch } from "./store";

export const Cart = () => {
  const products = useAppSelector((state) => state.cart.products);
  const cart = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();

  const productsInCart = products.filter((product) => cart[product.sku]);

  return (
    <ScrollView>
      {productsInCart.map((product) => (
        <View key={product.sku} style={styles.cartRow}>
          <Image
            source={{ uri: product.image }}
            style={styles.cartImage}
            resizeMode="contain"
          />
          <View style={styles.content}>
            <Text>{product.name}</Text>
            <Button
              title="Remove from Cart"
              onPress={() => dispatch(removeFromCart(product.sku))}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};
