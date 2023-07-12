import "./Products.css";
import ankara from "../assets/ankara.jpg";

function Products() {
  return (
    <>
      <div className="card">
        <img src={ankara} alt="Ankaratop and pants"/>

        <h3>Ankara top and pants</h3>
        <p className="price">Ksh 4,500</p>
       
        <button>Add to Cart</button>
      </div>
    </>
  );
}

export default Products;
