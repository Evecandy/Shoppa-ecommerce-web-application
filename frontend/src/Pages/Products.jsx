import "./Products.css";
import ProductCard from "../Components/ProductCard";
// import { products } from "../db";
import { useEffect, useState } from "react";

function Products() {
  // const products = Array(10).fill(null)
  
  const [products, setProducts] = useState([]);

  async function fetchProducts(){
    const response = await fetch('http://localhost:8080/products')
    const data = await response.json()
    const productsList = []
    data.forEach((product, index) =>  {
      productsList[index] = <ProductCard key={product.id} data={ {...product}}/>
    })
    setProducts(productsList)
  }

useEffect( () => {
  fetchProducts()
}, [])

  return (
    <>
      <div className="products">
      {products}
      </div>
    </>
  );
}

export default Products;
