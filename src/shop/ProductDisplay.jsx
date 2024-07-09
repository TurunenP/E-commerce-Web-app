//ProductDisplay.jsx

import React, {useState} from 'react'
import { Link } from "react-router-dom";

const ProductDisplay = ({item}) => {
    //console.log(item)
    const {name, id, price, seller, ratingsCount, quantity, img} = item;
 const desc =
   "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.";
    const [prequantity, setQuantity] = useState(quantity);
    const [coupon, setCoupon] = useState("")
    const [size, setSize] = useState("Select Size");
    const [color, setColor] = useState("Select Color");
    
    const handleSizeChange = (e) => {
      setSize(e.target.value)
    }

    const handleColor = (e) => {
      setColor(e.target.value);
    };

     const handleDecrease = () => {
       if(prequantity > 1) {
        setQuantity(prequantity - 1)
       }
     };

      const handleIncrease = () => {
        setQuantity(prequantity + 1)
      };

       const handleSubmit = (e) => {
         e.preventDefault();
         const product = {
           id: id,
           img: img,
           name: name,
           price: price,
           quantity: prequantity,
           size: size,
           color: color,
           coupon: coupon,
         };
         // console.log(product)

         // Get existing cart items from localStorage
         const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
         // Check if product already exists in cart
         const existingProductIndex = existingCart.findIndex(
           (item) => item.id === id
         );
         if (existingProductIndex !== -1) {
           // If product exists, update quantity
           existingCart[existingProductIndex].quantity += prequantity;
         } else {
           // If product doesn't exist, add it to cart
           existingCart.push(product);
         }
         // Update cart in localStorage
         localStorage.setItem("cart", JSON.stringify(existingCart));

         //reset fom page
         setQuantity(1);
         setColor("Select Color");
         setSize("Select Size");
         setCoupon("");
       };

  return (
    <div>
      <div>
        {/* ProductDisplay: {name} */}
        <h4>{name}</h4>
        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <span>{ratingsCount} review</span>
        </p>
        <h5>${price}</h5>
        <h6>{seller}</h6>
        <p>{desc}</p>
      </div>
      {/* Card components */}
      <div>
        <form onSubmit={handleSubmit}>
          {/* Sizing */}
          <div className="select-product size">
            <select value={size} onChange={handleSizeChange}>
              <option>Select Size</option>
              <option>SM</option>
              <option>MD</option>
              <option>LG</option>
              <option>XL</option>
              <option>XXL</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>

          {/* Color */}
          <div className="select-product color">
            <select value={color} onChange={handleColor}>
              <option>Select Color</option>
              <option>Pink</option>
              <option>Ash</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Black</option>
            </select>
            <i className="icofont-rounded-up"></i>
          </div>

          {/* Cart plus, minus*/}
          <div className="cart-plus-minus">
            <div className="dec qtybutton" onClick={handleDecrease}>
              -
            </div>
            <input
              className="cart-plus-minus-box"
              type="text"
              name="qtybutton"
              id="qtybutton"
              value={prequantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
            />
            <div className="inc qtybutton" onClick={handleIncrease}>
              +
            </div>
          </div>

          {/* Coupon field*/}
          <div className="discount-code mb-2">
            <input
              type="text"
              placeholder="Enter Discount Code"
              onChange={(e) => setCoupon(e.target.value)}
            />
          </div>
          {/* Button section*/}
          <button type="submit" className="lab-btn">
            <span>Add to Cart</span>
          </button>
          <Link to="/cart-page" className="lab-btn bg-primary">
            <span>Checkout</span>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default ProductDisplay


//https://www.youtube.com/watch?v=PGuKjkdGrEI
//54MINS

//https://swiperjs.com/demos

//https://www.youtube.com/watch?v=vic1s-a8v9g