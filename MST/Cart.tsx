import { View, Text, Image, ScrollView, Button } from "react-native";
import { observer } from "mobx-react-lite";

import styles from "../styles";
import { useCart } from "./store";

export const Cart = observer(() => {
  const { productsInCart, removeFromCart } = useCart();

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
              onPress={() => removeFromCart(product.sku)}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
});
