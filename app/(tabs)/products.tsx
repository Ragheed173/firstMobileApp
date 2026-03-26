import { addProduct, getProducts } from "@/api/ProductServise";
import ProductCard from "@/components/product-card";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const Products = () => {
  const [products, setProducts] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await getProducts();
      setProducts(response.data);
      setError(false);
    } catch (e) {
      console.error("Error fetching products:", e);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddProduct = async () => {
    const newProduct = {
      id: Date.now(),
      name: "New Product",
      price: 100,
      imageUrl: "https://via.placeholder.com/150",
    };
    const response = await addProduct(newProduct);
    setProducts([response.data, ...products]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error fetching products.</Text>;
  }

  return (
    <View style={{ marginTop: 20 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Product List</Text>
        <Pressable style={styles.button} onPress={handleAddProduct}>
          <Text style={styles.buttonText}>Add Product</Text>
        </Pressable>
      </View>

      <ScrollView style={{ height: 1000 }}>
        {products.map((product: any) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    margin: 32,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#2563eb",
    padding: 8,
    borderRadius: 10,
    height: 40,
    marginEnd: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});

export default Products;
