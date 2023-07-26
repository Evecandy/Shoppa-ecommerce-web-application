
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
          <div className="customer-info">
                <div>User ID</div>
                <div>Username</div>
                <div>Email</div>
                <div>Date Joined</div>
                <div>Role</div>
          </div>
          {customers.map((customer) => (
           
            <div key={customer.id}>
              <li  className="customer">
                <div>{customer.id}</div>
                <div>{customer.username}</div>
                <div>{customer.emailAddress}</div>
                <div>{new Date(customer.dateJoined).toUTCString()}</div>
                <div>{customer.role}</div>
              </li>
              </div>
          ))}
        </ul>
    </div>
  )
}

export default Customers
