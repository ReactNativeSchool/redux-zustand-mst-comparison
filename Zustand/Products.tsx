import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  Button,
} from "react-native";

import styles from "../styles";
import { useCart } from "./store";

export const Products = () => {
  const { addToCart, removeFromCart, cart, products } = useCart();

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
                  onPress={() => removeFromCart(product.sku)}
                />
              ) : (
                <Button
                  title="Add to Cart"
                  onPress={() => addToCart(product.sku)}
                />
              )}
            </View>
          </View>
        ))}
      </SafeAreaView>
    </ScrollView>
  );
};
