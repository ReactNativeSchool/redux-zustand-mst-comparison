import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  Button,
} from "react-native";

import styles from "../styles";
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
