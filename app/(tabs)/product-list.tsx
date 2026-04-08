import ProductCard from "@/components/product-card";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";

const ProductList = () => {
  const [products] = useState([]);

  return (
    <View>
      <Text>Product List</Text>
      <ScrollView>
        {products.map((product: any) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ProductList;
