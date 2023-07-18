import Sidebar from "../../Components/Sidebar"
import "./Customers.css";



function Customers() {
  

  return (
    <div className="customers-container">

    <Sidebar/>
      <div className="customers">
          <li className="customer-details">
            <div>Username <br />Shally08</div>
            <div>Email <br />Shally08@gmail.com</div>
          </li>
</div>
    </div>
  )
}

export default Customers
