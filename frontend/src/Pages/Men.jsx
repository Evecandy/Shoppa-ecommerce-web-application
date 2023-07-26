
import "./Products.css";
import ProductCard from "../Components/ProductCard";
// import { products } from "../db";
import { useEffect, useState } from "react";

function Men() {
  // const products = Array(10).fill(null)
  
  const [men, setMen] = useState([]);

  useEffect( () => {
    fetchMenProducts()
  }, [])

  async function fetchMenProducts(){
    const response = await fetch('http://localhost:8080/products/cat/men')
    const data = await response.json()
    const productsList = []
    data.forEach((product, index) =>  {
      productsList[index] = <ProductCard key={product.id} data={ {...product}}/>
    })
    setMen(productsList)
  }



  return (
    <>
      <div className="products">
      {men}
      </div>
    </>
  );
}

export default Men;
