// import { Link } from "react-router-dom";
import "./ProductCard.css";
import { extractColors } from 'extract-colors'
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCartFailure, fetchCartSuccess, fetchingCart } from "../Redux/cartSlice";


function ProductCard(props) {    
    let [image, setImage] = useState(null);
    const [colors, setColors] = useState([]);
    const navigate = useNavigate();
    const authUser = useSelector(state=>state.users.authUser)
    const dispatch = useDispatch()

    async function getColorPalette() {
        // console.log(image);
        // const colors = await extractColors(props.data.image);
        // setColors(colors);
        // console.log(colors);
    }

    function goToProductPage() {
        navigate("/product/" + props.data.id)
    }


    async function addToCart(event){
        event.stopPropagation();
        const response = await fetch('http://localhost:8080/cart', {
            method:'POST',
            headers: {
              'Content-Type':'application/json',
              token: authUser?.token || ''
            },
            body: JSON.stringify({
              productID:props.data.id
            })
          })
      
          const data = await response.json()
          console.log(data);
          dispatch(fetchingCart())
          fetch('http://localhost:8080/cart', {
            headers:{token:authUser?.token}
          }).then(response=>{
            response.json().then(data=>{
              response.ok ? dispatch(fetchCartSuccess(data)) : dispatch(fetchCartFailure(data))
            })
          })
    
    }

  
    useEffect(() => {
        // setImage(props.data.image)
        const img = new Image()
        img.crossOrigin = 'Anonymous'
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
                    <div className="price">Ksh {props.data.price}</div>
                    {/* <Link to = "/cart"> */}
                    <button className="add-to-cart green-btn btn" onClick={addToCart}>Add to Cart</button>
                    {/* </Link> */}
                </div>
            </div>
        </>
    )
}

export default ProductCard