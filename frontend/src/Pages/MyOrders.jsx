
import { useEffect, useState } from "react";
import "./MyOrders.css"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";


function MyOrders() {
  
  const [ myOrders, setMyOrders] = useState([]);
  const authUser = useSelector(state =>state.users.authUser)

  async function fetchMyOrders(){
    const response = await fetch('http://localhost:8080/orders', {
      headers:{
        token:authUser?.token || ""
      }
    })
    const data = await response.json()
    console.log(data);
    response.ok ? setMyOrders(data) : setMyOrders([]) 
  }

  useEffect( ()=> {
    fetchMyOrders()
  }, [])

  return (
    <>
      <div className="orders-heading">My orders</div>
      <div className="orders-status">
        <ul>
            
                Processing
                Shipping 
                Shipped 
                Canceled 
        </ul>
      </div>

        
        <ul className="orders">
          <div className="orders-info">
                <div>Order ID</div>
                <div>Order date</div>
                <div>Amount</div>
                <div>Items</div>
                <div>Status</div>
          </div>
          {myOrders.map((order) => (
            <Link to={"/order/" + order.id} key={order.id} className="order-link">

              <li  className="order">
                <div>{order.id}</div>
                <div>{order.dateOfOrder}</div>
                {/* <div>{order.totalAmount}</div>
                <div>{order.itemsCount}</div> */}
                <div>{order.orderStatus}</div>
              </li>
            </Link>
          ))}
        </ul>

      <ul>

        </ul>

    </>
  )
}

export default MyOrders
