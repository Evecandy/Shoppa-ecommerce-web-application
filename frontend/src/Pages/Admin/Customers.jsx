
import { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar"
import "./Customers.css";
import { useSelector } from "react-redux";



function Customers() {
  
  const [ customers, setCustomers ] = useState([]);
  const authUser = useSelector(state=>state.users.authUser)

  async function fetchCustomers(){
    const response = await fetch('http://localhost:8080/users', {
      headers:{
        token:authUser?.token || ""
      }
    } )
    const data = await response.json()
    console.log(data);
    response.ok ? setCustomers(data) : setCustomers([])
  }

  useEffect( ()=> {
    fetchCustomers()
  },[])

  return (
    <div id="customers-container">

    
      <ul className="customers">
          <li className="customer-details">
            <div>Username <br />Shally08</div>
            <div>Email <br />Shally08@gmail.com</div>
          </li>
      </ul>
      <ul className="customers">
          <div className="customer-info">
                <div>Username</div>
                <div>Order Date</div>
                <div>Email</div>
                <div>Date Joined</div>
                <div>Role</div>
          </div>
          {myOrders.map((order) => (
            <Link to={"/order/" + order.id} key={order.id} className="order-link">

              <li  className="order">
                <div>{order.id}</div>
                <div>{new Date(order.dateOfOrder).toUTCString()}</div>
                {/* <div>{order.totalAmount}</div>
                <div>{order.itemsCount}</div> */}
                <div>{order.orderStatus}</div>
              </li>
            </Link>
          ))}
        </ul>
    </div>
  )
}

export default Customers
