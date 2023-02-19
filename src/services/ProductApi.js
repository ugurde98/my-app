export var ProductsApi = async () => {
   const request=  await fetch("https://fakestoreapi.com/products")
   const response= request.json()
   return response
      
  };