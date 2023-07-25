import { useParams } from "react-router-dom";
import ankara from "../assets/ankara.jpg";
import "./OrderDetails.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function OrderDetails() {
  const [order, setOrder] = useState({});
  const { id } = useParams();
  const authUser = useSelector((state) => state.users.authUser);

  async function fetchOrder() {
    const response = await fetch("http://localhost:8080/orders/" + id, {
      headers: {
        token: authUser?.token || "",
      },
    });
    setOrder(await response.json());
  }

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <>
      {order.itemsCount ? (
        <>
          <div>
            <div className="order-details-header">Order details</div>
            <div>
              <div className="order-details-list">
                <div>Order no: {order.id}</div>
                <div>Order status: {order.orderStatus}</div>
                <div>Items bought: {order.itemsCount}</div>
                <div>Payment method:</div>
                <div>
                  Ordered on: {new Date(order.dateOfOrder).toLocaleString()}
                </div>
              </div>

              {order.items.map((item) => {
                return <div className="order-item-container" key={item.saleID}>
                  <div className="order-item">
                    <div
                      className="order-item-image"
                      style={{ backgroundImage: `url(${item.image}` }}
                    ></div>

                    <div className="order-item-details">
                      <div>
                        {" "}
                        Ksh {item.price} x {item.quantity}{" "}
                      </div>
                      <div>{item.name}</div>
                      <div>size : S</div>
                    </div>
                  </div>
                </div>;
              })}
            </div>
          </div>

          <div className="order-payment-amount">
            <div>Payment Amount:</div>
            <div>Ksh {order.total}</div>
          </div>
        </>
      ) : (
        <h1>No order found with id {id}</h1>
      )}
    </>
  );
}

export default OrderDetails;
