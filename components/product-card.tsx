import { Image } from "expo-image";
import type { Href } from "expo-router";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const ProductCard = ({ id, name, price, imageUrl }: any) => {
  return (
    <View style={styles.productCard} key={id}>
      <Link href={`/product-details/${id}` as Href}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <View>
          <Text>{name}</Text>
          <Text>${price}</Text>
        </View>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  productCard: {
    flex: 1,
    padding: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    margin: 20,
    textAlign: "center",
    backgroundColor: "#fff",
  },
  image: {
    height: 178,
    width: 290,
  },
});

export default ProductCard;
