// // CartPage.jsx

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [cartSubTotal, setCartSubTotal] = useState(0);
//  const [orderTotal, setOrderTotal] = useState(0);

//   useEffect(() => {
//     // Fetch cart from local item storage
//     const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(storedCartItems);

//     // Calculate cart subtotal
//     const subTotal = storedCartItems.reduce((total, item) => {
//       return total + calculateTotalPrice(item);
//     }, 0);
//     setCartSubTotal(subTotal);

//     // Set order total to be the same as cart subtotal initially
//     setOrderTotal(subTotal);
//   }, []);

//   // Calculate prices
//   const calculateTotalPrice = (item) => {
//     return item.price * item.quantity;
//   };

//   // Handle quantity increase
//   const handleIncrease = (item) => {
//     item.quantity += 1;
//     setCartItems([...cartItems]);

//     // Update local storage with new cart items
//     localStorage.setItem("cart", JSON.stringify(cartItems));

//     // Recalculate order total
//     const updatedTotal = cartItems.reduce((total, cartItem) => {
//       return total + calculateTotalPrice(cartItem);
//     }, 0);
//     setOrderTotal(updatedTotal);
//     // Recalculate order total
//     setOrderTotal(updatedTotal);
//   };

//   // Handle quantity decrease
//   const handleDecrease = (item) => {
//     if (item.quantity > 1) {
//       item.quantity -= 1;
//       setCartItems([...cartItems]);

//       // Update local storage with new items
//       localStorage.setItem("cart", JSON.stringify(cartItems));

//       // Recalculate order total
//       const updatedTotal = cartItems.reduce((total, cartItem) => {
//         return total + calculateTotalPrice(cartItem);
//       }, 0);
//       setOrderTotal(updatedTotal);
//     } else {
//       handleRemoveItem(item); // If quantity becomes 0, remove the item
//     }
//   };

//   // Handle delete
//   const handleRemoveItem = (item) => {
//     const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);

//     // Update new cart
//     setCartItems(updatedCart);

//     // Update local storage
//     localStorage.setItem("cart", JSON.stringify(updatedCart));

//     // Recalculate order total
//     const updatedTotal = updatedCart.reduce((total, cartItem) => {
//       return total + calculateTotalPrice(cartItem);
//     }, 0);
//     setOrderTotal(updatedTotal);
//   };

//CartPage.jsx

import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import delImgUrl from "../assets/images/shop/del.png";
import CheckoutPage from "./CheckoutPage";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [orderTotal, setOrderTotal] = useState(0);

  useEffect(() => {
    // Fetch cart from local item storage
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);

    // Calculate cart subtotal
    const subTotal = storedCartItems.reduce((total, item) => {
      return total + calculateTotalPrice(item);
    }, 0);
    setCartSubTotal(subTotal);

    // Set order total to be the same as cart subtotal initially
    setOrderTotal(subTotal);
  }, [cartItems]);

  // Calculate prices
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  // Handle quantity increase
  const handleIncrease = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems]);

    // Update local storage with new cart items
    localStorage.setItem("cart", JSON.stringify(cartItems));

    // Recalculate order total
    const updatedTotal = cartItems.reduce((total, cartItem) => {
      return total + calculateTotalPrice(cartItem);
    }, 0);
    setOrderTotal(updatedTotal);
    // Recalculate order total
    setOrderTotal(updatedTotal);
  };

  // Handle quantity decrease
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItems([...cartItems]);

      // Update local storage with new items
      localStorage.setItem("cart", JSON.stringify(cartItems));

      // Recalculate order total
      const updatedTotal = cartItems.reduce((total, cartItem) => {
        return total + calculateTotalPrice(cartItem);
      }, 0);
      setOrderTotal(updatedTotal);
    } else {
      handleRemoveItem(item); 
    }
  };

  // Handle delete
  const handleRemoveItem = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);

    // Update new cart
    setCartItems(updatedCart);

    // Update local storage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Recalculate order total
    const updatedTotal = updatedCart.reduce((total, cartItem) => {
      return total + calculateTotalPrice(cartItem);
    }, 0);
    setOrderTotal(updatedTotal);
  };

  return (
    <div>
      <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />
      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/* Cart Top */}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cart-products">Products</th>
                    <th className="cart-price">Price</th>
                    <th className="cart-quantity">Quantity</th>
                    <th className="cart-toprice">Total</th>
                    <th className="cart-edit">Edit</th>
                  </tr>
                </thead>
                {/* Table body */}
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td className="product-item cart-product">
                        <div className="p-thumb">
                          <Link to="/shop">
                            <img src={item.img} alt="" />
                          </Link>
                        </div>
                        <div className="p-content">
                          {/* Render item name */}
                          <Link to="/shop">{item.name}</Link>
                        </div>
                      </td>
                      <td className="cat-price">$ {item.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            onClick={() => handleDecrease(item)}
                          >
                            -
                          </div>
                          <input
                            type="text"
                            className="cart-plus-minus-box"
                            name="qtybutton"
                            value={item.quantity}
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleIncrease(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      {/* Total */}
                      <td className="cat-toprice">
                        ${calculateTotalPrice(item)}
                      </td>
                      <td className="cat-edit">
                        <a href="#" onClick={() => handleRemoveItem(item)}>
                          <img src={delImgUrl} alt="" />{" "}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Cart Top ends */}

            {/* Cart Bottom */}
            <div className="cart-bottom">
              {/* Checkout box */}
              <div className="cart-checkout-box">
                <form className="coupon">
                  <input
                    className="cart-page-input-text"
                    type="text"
                    name="coupon"
                    id="coupon"
                    placeholder="Coupon code ..."
                  />
                  <input type="submit" value={"Apply Coupon"} />
                </form>
                <form className="cart-checkout">
                  <input type="submit" value="Update cart" />
                  <div>
                    <CheckoutPage/>
                  </div>
                </form>
              </div>
              {/* Checkout box ends */}
              {/* Shopping box */}
              <div className="shipping-box">
                <div className="row">
                  <div className="col-md-6 col-12">
                    {/* First select */}
                    <div className="calculate-shipping">
                      <h3>Calculate Shipping</h3>
                      <div className="outline-select">
                        <select>
                          <option value="uk">United Kingdon (Uk)</option>
                          <option value="usa">United States (USA)</option>
                          <option value="bd">Bangladesh (BD)</option>
                          <option value="ind">India (IND)</option>
                          <option value="ken">Kenya (KEN)</option>
                        </select>
                        {/* <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span> */}
                      </div>
                      {/* <div className="outline-select shipping-select">
                        <select>
                          <option value="uk">London</option>
                          <option value="usa">Washington</option>
                          <option value="bd">Karachi</option>
                          <option value="ind">Delhi</option>
                          <option value="nrb">Nairobi</option>
                        </select>
                      </div> */}
                      <div className="col-md-6 col-12">
                        <div className="row">
                          {/* Second select */}
                          <div className="col-md-6 col-12">
                            <div className="outline-select shipping-select">
                              <select>
                                <option value="london">London</option>
                                <option value="washington">Washington</option>
                                <option value="karachi">Karachi</option>
                                <option value="delhi">Delhi</option>
                                <option value="nairobi">Nairobi</option>
                                {/* Add other cities as options */}
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6 col-12">
                            <div className="postal-zip-code">
                              <input
                                type="text"
                                placeholder="Enter Postal/Zip"
                                className="cart-page-input-text"
                                id="postalcode"
                                name="postalcode"
                              />
                              <button
                                className="cart-page-input-text"
                                type="submit"
                              >
                                Update Address
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h3>Cart Totals</h3>
                      <ul className="lab-ul">
                        <li>
                          <span className="pull-left">Cart SubTotal</span>
                          <span className="pull-right d-flex justify-content-end p-1">
                            $ {cartSubTotal}{" "}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </li>
                        <li>
                          <span className="pull-left">
                            Shiping and Handling
                          </span>
                          <p className="pull-right d-flex justify-content-end p-1">
                            Free Shipping
                          </p>
                        </li>
                        <li>
                          <span className="pull-left">Order Total</span>
                          <p className="pull-right d-flex justify-content-end p-1">
                            $ {orderTotal.toFixed(2)}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;





