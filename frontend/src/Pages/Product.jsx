

import "./Product.css";
import ankara from "../assets/ankara.jpg";

function Product() {
  return (
    <>
      <div className="card">
        <img src={ankara} alt="Ankaratop and pants"/>
    </div>
    <div>
        <h3>Ankara top and pants</h3>
        <p className="price">Ksh 4,500</p>
        <p>Some text about the jeans..</p>
        <button>Add to Cart</button>
        
      </div>
    </>
  );
}

export default Product;
