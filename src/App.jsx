
import { Outlet } from 'react-router-dom'
import './App.css'
import NavItems from './components/NavItems'
import Footer from './components/Footer'

function App() {

  return (
    <>
      {/* <h1 className='text-primary fs-4 m-5 pt-5'>Hello there</h1> */}
      <NavItems/>
     <div className="min-vh-100">
     <Outlet/>
     </div>
      <Footer/>
    </>

  )
}

export default App


//https://www.youtube.com/watch?v=pjEC9d28SKM&t=48s
//https://reactrouter.com/en/main/start/tutorial
//https://getbootstrap.com/
//https://react-bootstrap.github.io/docs/getting-started/introduction
//https://swiperjs.com/
//https://www.npmjs.com/package/@popperjs/core
//https://icofont.com/


//Hey developer 👋

//You can provide a way better UX than this when your app throws errors by providing your own ErrorBoundary or errorElement prop on your route.

//3:56,7

//https://randomfinnishlesson.blogspot.com/2013/06/36-verbs-you-should-maybe-know.html
//Yki testi common verbs in speaking


//https://www.youtube.com/watch?v=B98mC0Hm7Ds
//2 mins

{/* <div className="cart-bottom">
  <div className="cart-checkout-box">
    <form className="coupon">
      <input
        className="cart-page-input-text"
        type="text"
        name="coupon"
        id="coupon"
        placeholder="Coupon code ...."
      />
      <input type="submit" value={"Apply Coupon"} />
    </form>
    <form className="cart-checkout">
      <input type="submit" value={"Update Cart"} />
      <div>CheckoutPage</div>
    </form>
  </div>
  {/* Checkout Box end*/}
  {/* Shopping Box*/}
  // <div className="shipping-box">
  //   <div className="row">
  //     <div className="col-md-6 col-12">
  //       <div className="calculate-shipping">
  //         <h3>Calculate Shipping</h3>
  //         <div className="outline-select">
  //           <select>
  //             <option value={"uk"}>United Kingdon (UK)</option>
  //             <option value={"usa"}>United States (USA)</option>
  //             <option value={"bd"}>Bangladesh (BD)</option>
  //             <option value={"ind"}>India (IND)</option>
  //             <option value={"ken"}>Kenya(KEN)</option>
  //           </select>
  //           {/* <span className="select-icon">
  //                         <i className="icofont-rounded-down"></i>
  //                       </span> */}
  //         </div>

  //         <div className="outline-select shipping-select">
  //           <select>
  //             <option value="uk">London</option>
  //             <option value="usa">Washington</option>
  //             <option value="bd">Karachi</option>
  //             <option value="ind">Delhi</option>
  //             <option value="nrb">Nairobi</option>
  //           </select>
  //         </div>
  //         <input
  //           className="cart-page-input-text"
  //           type="text"
  //           name="postalCode"
  //           id="postalcode"
  //           placeholder="PostalCode/Zip* "
  //         />
  //       </div>
  //       <button type="submit">Update Address</button>
  //     </div>
  //     {/* Right side */}
  //     {/* <div className="col-md-6 col-12">
  //                   <div className="cart-overview">
  //                     <h3>Cart Totals</h3>
  //                     <ul className="lab-ul">
  //                       <li>
  //                         <span className="pull-left">Cart SubTotal</span>
  //                         <p className="pull-right">$ {cartSubTotal}</p>
  //                       </li>
  //                     </ul>
  //                   </div>
  //                 </div> */}
  //     <div className="col-md-6 col-12">
  //       <div className="cart-overview">
  //         <h3>Cart Totals</h3>
  //         <ul className="lab-ul">
  //           {/* Cart SubTotal */}
  //           <li>
  //             <span className="pull-left">Cart SubTotal</span>
  //             <p className="pull-right">$ {cartSubTotal}</p>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   </div>
  // </div>
// </div>; */}