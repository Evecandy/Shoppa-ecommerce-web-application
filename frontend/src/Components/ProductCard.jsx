import { Link } from "react-router-dom";
import "./ProductCard.css";
import { extractColors } from 'extract-colors'
import { useState, useEffect } from "react"


function ProductCard(props) {
    // console.log(props.data.img);
    
    let [image, setImage] = useState(null);
    const [colors, setColors] = useState([]);

    async function getColorPalette() {
        console.log(props.data.img);
        image = (await import(`../assets/${props.data.img}`)).default
        setImage(image)
        const colors = await extractColors(image);
        setColors(colors);
        // console.log(colors);
    }
  
    useEffect(() => {
        getColorPalette();
    }, []);



    return (
        <>
            <div className="product-card">
                <div style={{ backgroundColor:colors[3]?.hex, backgroundImage:`url(${image})`}} className="product-image">  </div>

                <h3>{props.data.img.split('.')[0].split('_').join(' ')}</h3>
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