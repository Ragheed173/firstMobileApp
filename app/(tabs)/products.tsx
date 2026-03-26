import { addProduct, getProducts } from "@/api/ProductServise";
import ProductCard from "@/components/product-card";
import { queryClient } from "@/lib/queryClient";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const Products = () => {
  const fetchData = async () => {
    const response = await getProducts();
    return response.data;
  };

  const { isLoading, isError, data } = useQuery({
    queryKey: ["products"],
    queryFn: fetchData,
  });

  const handleAddProduct = async () => {
    const data = {
      id: Date.now(),
      name: "New Product",
      price: 100,
      imageUrl: "https://dummyimage.com/600x600/000/fff&text=iPhone+15",
      description: "This is a new product",
    };
    mutate(data);
  };

  const { mutate } = useMutation({
    mutationKey: ["addProduct"],
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (isError) {
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
        {data?.map((product: any) => (
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
