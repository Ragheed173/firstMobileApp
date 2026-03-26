import { getProductById } from "@/api/ProductServise";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ProductDetails = () => {
  const { id } = useLocalSearchParams();
  const [productDetails, setProductDetails] = useState<any>(null);

  const fetchData = async () => {
    const response = await getProductById(id);
    setProductDetails(response.data);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <View>
      <Image style={styles.image} source={{ uri: productDetails?.imgUrl }} />
      <Text style={styles.text}>{productDetails?.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 178,
    width: 500,
  },
  text: {
    fontSize: 16,
    marginTop: 32,
    textAlign: "center",
  },
});

export default ProductDetails;
