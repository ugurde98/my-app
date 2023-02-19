import { View, Text } from 'react-native'
import React from 'react'

const ProductList = ({product}) => {
  return (
    <View>
      {product ? <Text>{product.title}</Text> : <Text>Product Yok</Text>}
    </View>
  )
}

export default ProductList