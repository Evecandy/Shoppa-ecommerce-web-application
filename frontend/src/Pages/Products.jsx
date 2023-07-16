import "./Products.css";
import ProductCard from "../Components/ProductCard";
import { products } from "../db";
import { useEffect, useState } from "react";

function Products() {
  // const products = Array(10).fill(null)
  
  const [products1, setProducts] = useState([]);

useEffect( () => {
  const productsList = []
  products.forEach((value, index) =>  {
    productsList[index] = <ProductCard key={index} data={ {...value}}/>
  })
  setProducts(productsList)
}, [])

  return (
    <>
      <div className="products">
      {products1}
      </div>
    </>
  );
}

export default Products;
