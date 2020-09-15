import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { UserAndCartContext } from "../../App";
import CartItem from "../CartItem/CartItem";
// Code Copied from login
import { useForm } from "react-hook-form";

const Checkout = () => {
  const { cart } = useContext(UserAndCartContext);
  const { register, handleSubmit, errors, getValues } = useForm();
  const [deliveryDetails, setDeliveryDetails] = useState({});

  // Delivery details still not used
  const onSubmit = (data) => {
    setDeliveryDetails(data);
  };

  const subtotal = cart.reduce((total, item) => {
    console.log(item);
    return total + parseFloat(item.price) * parseFloat(item.quantity);
  }, 0);

  const tax = subtotal / 10;
  let deliveryFee = 0;
  if (subtotal > 0) {
    deliveryFee = 5.0;
  }
  const grandTotal = subtotal + deliveryFee + tax;

  // Place order button disability
  const disabled = deliveryDetails ? true : false;

  return (
    <Container>
      <Row>
        {/* Checkout form */}
        <Col sm={12} md={8}>
          <div className="form-container">
            <h4
              style={{ borderBottom: "1px solid gray", paddingBottom: "10px" }}
              className="delivery-title"
            >
              Edit delivery details
            </h4>

            <form className="signing-form" onSubmit={handleSubmit(onSubmit)}>
              <input
                className="form-control"
                name="type"
                defaultValue="Door To Door"
                ref={register({
                  required: "Name is required",
                })}
              />
              {errors.type && (
                <span className="error">{errors.type.message}</span>
              )}

              <input
                placeholder="Road No."
                className="form-control"
                name="road"
                ref={register({
                  required: "Road No. Required",
                })}
              />
              {errors.road && (
                <span className="error">{errors.road.message}</span>
              )}

              <input
                placeholder="Enter Flat No."
                className="form-control"
                name="flatNo"
                ref={register({
                  required: "Flat No. Required",
                })}
              />
              {errors.flatNo && (
                <span className="error">{errors.flatNo.message}</span>
              )}

              <input
                placeholder="Business Name"
                className="form-control"
                name="businessName"
                ref={register({
                  required: "Business Name Required",
                })}
              />
              {errors.businessName && (
                <span className="error">{errors.businessName.message}</span>
              )}

              <input
                placeholder="Add phone"
                className="form-control"
                name="phone"
                ref={register({
                  required: "Phone number required",
                })}
              />
              {errors.phone && (
                <span className="error">{errors.phone.message}</span>
              )}

              <input
                className="form-control submit-btn"
                type="submit"
                value="Save delivery details"
              />
            </form>
          </div>
        </Col>

        {/* Shopping cart */}
        <Col sm={12} md={4}>
          <div>
            <p>Arriving within 3 hr</p>
            {cart.map((foodItem) => (
              <CartItem key={foodItem.id} food={foodItem}></CartItem>
            ))}
            <br />
            <div>
              <div className="d-flex justify-content-between">
                <span>Subtotal({cart.length} items)</span>
                <span>${Math.round(subtotal)}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Tax)</span>
                <span>${Math.round(tax)}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Delivery Fee</span>
                <span>${Math.round(deliveryFee)}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Total</span>
                <span>${Math.round(grandTotal)}</span>
              </div>
              <br />
              <button disabled={disabled} className="form-control submit-btn">
                Place Order
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
