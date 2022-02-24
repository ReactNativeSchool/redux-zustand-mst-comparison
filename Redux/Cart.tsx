import {
  View,
  Text,
  Image,
  ScrollView,
  Button,
  StyleSheet,
} from "react-native";

import { useAppSelector, removeFromCart, useAppDispatch } from "./store";

const styles = StyleSheet.create({
  row: { flexDirection: "row", paddingHorizontal: 20, paddingVertical: 10 },
  image: {
    width: 100,
    height: 100,
  },
  content: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export const Cart = () => {
  const products = useAppSelector((state) => state.cart.products);
  const cart = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();

  const productsInCart = products.filter((product) => cart[product.sku]);

  return (
    <ScrollView>
      {productsInCart.map((product) => (
        <View key={product.sku} style={styles.row}>
          <Image
            source={{ uri: product.image }}
            style={styles.image}
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
