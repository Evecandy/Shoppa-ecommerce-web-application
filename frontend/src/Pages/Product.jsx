import "./Product.css";
import ankara from "../assets/ankara.jpg";

function Product() {
  return (
    <>
      <div id="product-details">
        <div id="product-image" style={{backgroundImage: `url(${ankara})`}}>

        </div>
        <div id="product-info">
          <h3 id="product-name">Ankara top and pants</h3>
          <p id="product-price">Ksh 4,500</p>

          {/* Star rating */}

          <label htmlFor="">Color</label>
          <select id="color">
            <option value="yellow">Yellow</option>
            <option value="multicolored">Multi colored</option>
          </select>
        </div>
      </div>
      <div id="add-to-cart">
        <button className="btn green-btn">Add to Cart</button>
      </div>
    </>
  );
}

export default Product;
