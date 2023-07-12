import "./Products.css";
import ankara from "../assets/ankara.jpg";
import { Link } from "react-router-dom";

function Products() {
  return (
    <>
      <div className="card">
        <img src={ankara} alt="Ankaratop and pants"/>

        <h3>Ankara top and pants</h3>
        <p className="price">Ksh 4,500</p>
       <Link to = "/cart">
       <button className="add-to-cart green-btn btn">Add to Cart</button>
       </Link>
        
      </div>
    </>
  );
}

export default Products;
