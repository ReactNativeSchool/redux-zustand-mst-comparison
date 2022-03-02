import React from "react";
import { View, Image, Text, Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: { paddingHorizontal: 20 },
  image: { width: undefined, height: 300 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

type IProductCard = {
  name: string;
  image: string;
  sku: string;
  isInCart: boolean;
  onRemove: (sku: string) => void;
  onAdd: (sku: string) => void;
};

export const ProductCard = ({
  name,
  image,
  sku,
  isInCart,
  onRemove,
  onAdd,
}: IProductCard) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: image }}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.row}>
        <Text>{name}</Text>
        {isInCart ? (
          <Button title="Remove from Cart" onPress={() => onRemove(sku)} />
        ) : (
          <Button title="Add to Cart" onPress={() => onAdd(sku)} />
        )}
      </View>
    </View>
  );
};
