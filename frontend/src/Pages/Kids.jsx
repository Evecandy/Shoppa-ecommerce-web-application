

import "./Products.css";
import ProductCard from "../Components/ProductCard";
// import { products } from "../db";
import { useEffect, useState } from "react";

function Kids() {
  // const products = Array(10).fill(null)
  
  const [kids, setKids] = useState([]);

  useEffect( () => {
    fetchKidsProducts()
  }, [])

  async function fetchKidsProducts(){
    const response = await fetch('http://localhost:8080/products/cat/kids')
    const data = await response.json()
    const productsList = []
    data.forEach((product, index) =>  {
      productsList[index] = <ProductCard key={product.id} data={ {...product}}/>
    })
    setKids(productsList)
  }



  return (
    <>
      <div className="products">
      {kids}
      </div>
    </>
  );
}

export default Kids;
