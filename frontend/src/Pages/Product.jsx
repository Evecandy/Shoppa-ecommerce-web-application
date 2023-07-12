
import "./Product.css";
import ankara from "../assets/ankara.jpg";
import { Link } from "react-router-dom";

function Product() {
  return (
    <>
      <div className="card">
        <img src={ankara} alt="Ankaratop and pants"/>
    </div>
    <div>
        <h3>Ankara top and pants</h3>
        <p className="price">Ksh 4,500</p>

        {/* Star rating */}

        <label htmlFor="">Color</label>
        <select  id="color">
            <option value="yellow">Yellow</option>
            <option value="multicolored">Multi colored</option>
        </select>

        <Link to = "/cart">
        <button>Add to Cart</button>
        </Link>
      </div>
    </>
  );
}

export default Product;
