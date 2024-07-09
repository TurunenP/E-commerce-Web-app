// //Login.jsx

// import { useState, useContext } from "react"
// import { AuthContext } from "../context/AuthProvider";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { CgMail } from "react-icons/cg";

// const title = "Login"
// const socialTitle = "Login with Social Media"
// const btnText = "Login Now"

// const socialList = [
//   { iconName: "icofont-facebook", siteLink: "#", className: "facebook" },
//   { iconName: "icofont-twitter", siteLink: "#", className: "twitter" },
//   { iconName: "icofont-linkedin", siteLink: "#", className: "linkedin" },
//   { iconName: "icofont-instagram", siteLink: "#", className: "instagram" },
//   { iconName: "icofont-pinterest", siteLink: "#", className: "pinterest" },
// ];

// const Login = () => {
//  const [errorMessage, setErrorMessage] = useState("");
//  const { signupWithGmail, login } = useContext(AuthContext);
// //const {signInWithRedirect, login} = useContext(AuthContext)
// const location = useLocation()
// const navigate = useNavigate()

// const from = location.state?.from?.pathname || "/";

// const handleLogin = (event) => {
//   event.preventDefault()
// const form = event.target
// //console.log(form)
//  const email = form.email.value
//  const password = form.password.value
// //console.log(email, password)
// login(email, password).then((result) => {
//   const user = result.user
//   alert("Login successful")
//   navigate(from, {replace: true})
// }).catch ((error) => {
// const errorMsg = error.message
// setErrorMessage("Provide a valid email, password")
// })
// }

// // const handleRegister =()=> {
// //   console.log(handleRegister)
// //   signupWithGmail()
// //     .then((result) => {
// //       const user = result.user;
// //       navigate(from, { replace: true });
// //     })
// //     .catch((error) => {
// //       const errorMsg = error.message;
// //       setErrorMessage("Provide a valid email, password");
// //     });
// // }


// // const handleRegister = () => {
// //   signupWithGmail()
// //     .then((result) => {
// //       // Successfully signed in with Google
// //       console.log("Successfully signed in with Google:", result);
// //       // You can handle the success event here, such as redirecting to another page
// //     })
// //     .catch((error) => {
// //       // Handle errors
// //       console.error("Error signing in with Google:", error);
// //       setErrorMessage("Failed to sign in with Google. Please try again.");
// //     });
// // };

// const handleRegister = (event) => {
//   event.preventDefault(); // Prevent default anchor tag behavior
//   console.log("Attempting to register with Gmail...");
//   signupWithGmail()
//     .then((result) => {
//       console.log("Successfully signed up with Gmail:", result);
//       navigate(from, { replace: true });
//     })
//     .catch((error) => {
//       console.error("Error signing up with Gmail:", error);
//       setErrorMessage("Failed to sign up with Gmail. Please try again.");
//     });
// };


//     return (
//       <div>
//         <div className="login-section padding-tb section-bg">
//           <div className="container">
//             <div className="account-wrapper">
//               <h3 className="title">{title}</h3>
//               <form className="account-form" onSubmit={handleLogin}>
//                 <div className="form-group">
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     placeholder="Enter Your Email"
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <input
//                     type="password"
//                     name="password"
//                     id="password"
//                     placeholder="Enter Your Password"
//                     required
//                   />
//                 </div>
//                 {/* showing message */}
//                 <div>
//                   {errorMessage && (
//                     <div className="error-message text-danger mb-1">
//                       {errorMessage}
//                     </div>
//                   )}
//                 </div>
//                 <div className="form-group">
//                   <div className="d-flex justify-content-between flex-wrap pt-sm-2">
//                     <div className="checkgroup">
//                       <input type="checkbox" id="remember" name="remember" />
//                       <label htmlFor="remember"> Remember Me</label>
//                     </div>
//                     <Link to="/forgetpassword">Foget Password?</Link>
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <button type="submit" className="d-block lab-btn">
//                     <span>{btnText}</span>
//                   </button>
//                 </div>
//               </form>

//               {/* Account bottom */}
//               <div className="account-bottom">
//                 <span className="d-block cate pt-10 ">
//                   Do not Have an Account?
//                   <Link to="/signup page">Signup</Link>
//                 </span>
//                 <span className="or">
//                   <span>Or</span>
//                 </span>
//                 {/* Social login */}
//                 <h5 className="subtitle">{socialTitle}</h5>
//                 <ul className="lab-ul social-icons justify-content-center">
//                   <li>
//                     <a className="github" onClick={handleRegister}>
//                       <i className="icofont-github"></i>
//                     </a>

//                     {/* <button
//                       href="#"
//                       className="gmail-button"
//                       onClick={handleRegister}
//                     >
//                       <CgMail />
//                     </button> */}
//                     {/* <a
                      
//                       className="gmail-button"
//                       onClick={handleRegister}
//                     >
//                       <CgMail style={{ marginRight: "0.5em" }} />
//                       Sign up with Gmail
//                     </a> */}
//                   </li>
//                   <li>
//                     <a href="/" className="facebook">
//                       <i className="icofont-facebook"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="/" className="twitter">
//                       <i className="icofont-twitter"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="/" className="linkedin">
//                       <i className="icofont-linkedin"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="/" className="instagram">
//                       <i className="icofont-instagram"></i>
//                     </a>
//                   </li>
//                 </ul>
//                 <span className="or">
//                   <span>Or</span>
//                 </span>
//                 {/* <a className="gmail-button" onClick={handleRegister}>
//                   <CgMail style={{ marginRight: "0.5em" }} />
//                   Sign up with Gmail
//                 </a> */}
//               </div>

//               {/* <button
//                 className="gmail-button"
//                 onClick={handleRegister}
                
//               >
//                 <CgMail style={{ marginRight: "0.5em" }} />
//                 Sign up with Gmail
//               </button> */}
//               <div>{/* Your login form JSX */}</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
// }

// export default Login


import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CgMail } from "react-icons/cg";

const title = "Login";
const socialTitle = "Login with Social Media";
const btnText = "Login Now";

const socialList = [
  { iconName: "icofont-facebook", siteLink: "#", className: "facebook" },
  { iconName: "icofont-twitter", siteLink: "#", className: "twitter" },
  { iconName: "icofont-linkedin", siteLink: "#", className: "linkedin" },
  { iconName: "icofont-instagram", siteLink: "#", className: "instagram" },
  { iconName: "icofont-pinterest", siteLink: "#", className: "pinterest" },
];

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { signupWithGmail, login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        alert("Login successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMsg = error.message;
        setErrorMessage("Provide a valid email, password");
      });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    signupWithGmail()
      .then((result) => {
        console.log("Successfully signed up with Gmail:", result);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Error signing up with Gmail:", error);
        setErrorMessage("Failed to sign up with Gmail. Please try again.");
      });
  };

  return (
    <div>
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <form className="account-form" onSubmit={handleLogin}>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                  required
                />
              </div>
              {/* Showing message */}
              <div>
                {errorMessage && (
                  <div className="error-message text-danger mb-1">
                    {errorMessage}
                  </div>
                )}
              </div>
              <div className="form-group">
                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                  <div className="checkgroup">
                    <input type="checkbox" id="remember" name="remember" />
                    <label htmlFor="remember"> Remember Me</label>
                  </div>
                  <Link to="/forgetpassword">Forget Password?</Link>
                </div>
              </div>
              <div className="form-group">
                <button type="submit" className="d-block lab-btn">
                  <span>{btnText}</span>
                </button>
              </div>
            </form>

            {/* Account bottom */}
            <div className="account-bottom">
              <span className="d-block cate pt-10 ">
                Do not Have an Account?
                <Link to="/signup">Signup</Link>
              </span>
              <span className="or">
                <span>Or</span>
              </span>
              {/* Social login */}
              <h5 className="subtitle">{socialTitle}</h5>
              <ul className="lab-ul social-icons justify-content-center">
                {/* <li>
                  <button href="#" className="github" onClick={handleRegister}>
                    <i className="icofont-github"></i>
                  </button>
                </li> */}

                <li>
                  <div className="github" onClick={handleRegister}>
                    <i className="icofont-github"></i>
                  </div>
                </li>

                <li>
                  <a href="/" className="facebook">
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="twitter">
                    <i className="icofont-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="linkedin">
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="instagram">
                    <i className="icofont-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

