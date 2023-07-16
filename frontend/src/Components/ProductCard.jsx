// import { Link } from "react-router-dom";
import "./ProductCard.css";
import { extractColors } from 'extract-colors'
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

function ProductCard(props) {    
    let [image, setImage] = useState(null);
    const [colors, setColors] = useState([]);
    const navigate = useNavigate();

    async function getColorPalette() {
        // console.log(image);
        // const colors = await extractColors(props.data.image);
        // setColors(colors);
        // console.log(colors);
    }

    function goToProductPage() {
        navigate("/product/tgfvybhnj")
    }

    function addToCart(event){
        event.stopPropagation();
    }
  
    useEffect(() => {
        // setImage(props.data.image)
        const img = new Image()
        img.crossOrigin = 'anonymous'
        img.addEventListener( 'load', getColorPalette)
        img.src = props.data.image
        setImage(img)
        return () => {
            img.removeEventListener('load', getColorPalette)
        }
    }, [props.data.image]);


    return (
        <>
            <div className="product-card" onClick={goToProductPage}>
                <div style={{ backgroundColor:colors[3]?.hex, backgroundImage:`url(${props.data.image})`}} className="product-image">  </div>

                <h3 className="product-name">{props.data.name}</h3>
                <div className="pricing-and-action">
                    <div className="price">Ksh 4,500</div>
                    {/* <Link to = "/cart"> */}
                    <button className="add-to-cart green-btn btn" onClick={addToCart}>Add to Cart</button>
                    {/* </Link> */}
                </div>
            </div>
        </>
    )
}

export default ProductCard