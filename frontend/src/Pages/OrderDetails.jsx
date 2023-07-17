import ankara from "../assets/ankara.jpg";
import "./OrderDetails.css";

function OrderDetails() {
  return (
    <>
      <div>
        <div className="order-details-header">Order details</div>
        <div>
          <div className="order-details-list">
            <div>Order no:</div>
            <div>Payment method:</div>
            <div>Order date time:</div>
          </div>

          <div className="order-item-container">
            <div className="order-item">
              <div
                className="order-item-image"
                style={{ backgroundImage: `url(${ankara}` }}
              ></div>

              <div className="order-item-details">
                <div> Ksh 4,500 * 3 </div>
                <div>Ankara top and pants</div>
                <div>size : S</div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <div className="order-payment-amount">
        <div>Payment Amount:</div>
        <div>Ksh 27,000</div> 
      </div>
    </>
  );
}

export default OrderDetails;
