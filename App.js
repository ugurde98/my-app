import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import ProductList from './src/components/ProductList'
import { ProductsApi } from "./src/services/ProductApi";

export default function App() {
  const [products, setProducts] = useState([]);
  const [number, setNumber] = useState(1)
  console.log('number: ', number);
  


 const handleMore=()=>{
  setNumber(number+1)
 }

 const Product =async()=>{
  const x = await ProductsApi();
  console.log('x: ', x);
  setProducts(x)
 }
  useEffect(() => {
   Product()
  }, []);

  return (
    <View style={styles.container}>
    <SafeAreaView/>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductList product={item} />}
        onEndReached={handleMore}
        //onEndReachedThreshold={0.5}
      />
     
      <StatusBar style="auto" />
    </View>
  );
}
// const ProductList = ({ product }) => {
//   return (
//     <View>
//       <Text>{product.title}</Text>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
