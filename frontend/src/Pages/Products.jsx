import "./Products.css";
import ankara from "../assets/ankara.jpg";
import ProductCard from "../Components/ProductCard";

function Products() {
  const products = Array(10).fill(null)
  products.forEach((value, index) =>  {
    products[index] = <ProductCard key={index} data={ {img:ankara}}/>
  })
// console.log(products);

  return (
    <>
      <div className="products">
      {products}
      </div>
    </>
  );
}

export default Products;
