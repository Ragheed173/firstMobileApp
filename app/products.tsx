import { getProducts } from "@/api/ProductServise";
import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await getProducts();
    console.log(response.data);
    setProducts(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView style={{ height: 500 }}>
        {products.map((Product: any) => (
          <View key={Product.id} style={styles.productContainer}>
            <Image
              style={styles.image}
              source={{
                uri: Product.imageUrl,
              }}
            />
            <Text>{Product.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  productContainer: {
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});

export default Products;
