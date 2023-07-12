import ankara from "../assets/ankara.jpg";
function OrderDetails() {
  

  return (
    <>
    <div>
    <img src={ankara} alt="Ankaratop and pants"/>
      <div>
        <h2>Order details</h2>
      </div>
      <div>
        Order no:
        Payment method:
        Order date time:
      </div>
      <div>
       <p> Ksh 4,500 * 3 </p>
       <p>Ankara top and pants</p> 
        <p>size : S</p>
      </div>
      </div>
      <div>
        <h3>Payment Amount Ksh 27,000</h3>
      </div>
    </>
  )
}

export default OrderDetails
