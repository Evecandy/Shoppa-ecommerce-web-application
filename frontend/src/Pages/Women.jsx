
import "./Products.css";
import ProductCard from "../Components/ProductCard";
// import { products } from "../db";
import { useEffect, useState } from "react";

function Women() {
  // const products = Array(10).fill(null)
  
  const [women, setWomen] = useState([]);

  useEffect( () => {
    fetchWomenProducts()
  }, [])

  async function fetchWomenProducts(){
    const response = await fetch('http://localhost:8080/products/cat/women')
    const data = await response.json()
    const productsList = []
    data.forEach((product, index) =>  {
      productsList[index] = <ProductCard key={product.id} data={ {...product}}/>
    })
    setWomen(productsList)
  }



  return (
    <>
      <div className="products">
      {women}
      </div>
    </>
  );
}

export default Women;
