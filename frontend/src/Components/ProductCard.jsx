import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard(props) {
    
    return (
        <>
            <div className="product-card">
                <div style={{backgroundImage:`url(${props.data.img})`}} className="product-image">  </div>

                <h3>Ankara top and pants</h3>
                <div className="pricing-and-action">
                    <div className="price">Ksh 4,500</div>
                    <Link to = "/cart">
                        <button className="add-to-cart green-btn btn">Add to Cart</button>
                    </Link>
                </div>
                
        
            </div>
        </>
    )
}

export default ProductCard