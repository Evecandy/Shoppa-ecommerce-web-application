
import "./MyOrders.css"
import { Link } from "react-router-dom"

function MyOrders() {
  

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
      <div className="orders-info">
        <ul>
            Order ID
            Order date
            Amount
            Items
            Status
        </ul>
      </div>
        
        <ul className="orders">
          <Link to ="/order/cfhdgtkxf" className="order-link">
            <li className="order">
              <div>3d39279f-d590-4792-bc26-4b5a8adefd63</div>
              <div>Fri Jul 07 2023 03:03:40 GMT+0300</div>
              <div>Ksh 27,000</div>
              <div>2</div>
              <div>Shipping</div>
        
            </li>
            <li className="order">
              <div>40b48a91-747a-4c5b-8134-79e7f1a43f06</div>
              <div>Fri Jul 07 2023 03:03:40 GMT+0300</div>
              <div>Ksh 27,000</div>
              <div>2</div>
              <div>Processing</div>
        
            </li>
          </Link>

        </ul>
        


    </>
  )
}

export default MyOrders
