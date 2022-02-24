import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Button,
} from "react-native";

import {
  useAppSelector,
  addToCart,
  removeFromCart,
  useAppDispatch,
} from "./store";

const styles = StyleSheet.create({
  card: { paddingHorizontal: 20 },
  image: { width: undefined, height: 300 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export const Products = () => {
  const products = useAppSelector((state) => state.cart.products);
  const cart = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();

  return (
    <ScrollView>
      <SafeAreaView>
        {products.map((product) => (
          <View key={product.sku} style={styles.card}>
            <Image
              source={{ uri: product.image }}
              resizeMode="contain"
              style={styles.image}
            />
            <View style={styles.row}>
              <Text>{product.name}</Text>
              {cart[product.sku] ? (
                <Button
                  title="Remove from Cart"
                  onPress={() => dispatch(removeFromCart(product.sku))}
                />
              ) : (
                <Button
                  title="Add to Cart"
                  onPress={() => dispatch(addToCart(product.sku))}
                />
              )}
            </View>
          </View>
        ))}
      </SafeAreaView>
    </ScrollView>
  );
};
