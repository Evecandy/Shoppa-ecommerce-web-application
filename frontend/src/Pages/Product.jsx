import "./Product.css";
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartFailure, fetchCartSuccess, fetchingCart } from "../Redux/cartSlice";


function Product() {
  let [product, setProduct] = useState(null)
  let [error, setError] = useState(null)
  const dispatch = useDispatch();

  const authUser = useSelector((state) => state.users.authUser)

  const {id} = useParams()

  async function fetchProduct(id){
    const response = await fetch(`http://localhost:8080/products/${id}`)
    const data = await response.json()

    if (response.ok) {
      setProduct(data)
      setError(null)
    } else {
      setProduct(null)
      setError(data.message || 'An unexpected error occured')
    }
  }

  async function addToCart() {
    const response = await fetch('http://localhost:8080/cart', {
      method:'POST',
      headers: {
        'Content-Type':'application/json',
        token: authUser?.token || ''
      },
      body: JSON.stringify({
        productID: product.id
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

  useEffect(()=>{
    fetchProduct(id)
  },[])

  return (
    <>
    { product ? (
      <>
      <div id="product-details">
        <div id="product-image" style={{backgroundImage: `url(${product.image})`}}>

        </div>
        <div id="product-info">
          <h3 id="product-name">{product.name}</h3>
          <p id="product-price">Ksh {product.price}</p>

          {/* Star rating */}

          <label htmlFor="">Color</label>
          <select id="color">
            <option value="yellow">Yellow</option>
            <option value="multicolored">Multi colored</option>
          </select>
        </div>
      </div>
      <div id="add-to-cart">
        <button className="btn green-btn" onClick={addToCart}>Add to Cart</button>
      </div>
      </>
    )
    :
    (
      <div>{error}</div>
    )
    }
    </>
  );
}

export default Product;
