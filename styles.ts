import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // Products
  card: { paddingHorizontal: 20 },
  image: { width: undefined, height: 300 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  // Cart
  cartRow: { flexDirection: "row", paddingHorizontal: 20, paddingVertical: 10 },
  cartImage: {
    width: 100,
    height: 100,
  },
  content: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export default styles;
