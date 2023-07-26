
import { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar"
import "./Orders.css";
import { useSelector } from "react-redux";



function Orders() {
  
  const [ orders, setOrders ] = useState([]);
  const authUser = useSelector(state=>state.users.authUser)

  async function fetchOrders(){
    const response = await fetch('http://localhost:8080/orders', {
      headers:{
        token:authUser?.token || ""
      }
    } )
    const data = await response.json()
    console.log(data);
    response.ok ? setOrders(data) : setOrders([])
  }

  useEffect( ()=> {
    fetchOrders()
  },[])

  return (
    <div id="orders-container">

      <ul className="orders">
          <div className="order-info">
                <div>Order ID</div>
                <div>Date Of Order</div>
                <div>Order Status</div>
                <div>User ID</div>
          </div>
          {orders.map((order) => (
           
            <div key={order.id}>
              <li  className="order">
                <div>{order.id}</div>
                <div>{new Date(order.dateOfOrder).toUTCString()}</div>
                <div>{order.orderStatus}</div>
                <div>{order.userID}</div>
              </li>
              </div>
          ))}
        </ul>
    </div>
  )
}

export default Orders
