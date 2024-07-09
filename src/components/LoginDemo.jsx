// import React from "react";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { getAuth } from "firebase/auth";
// import app from "../firebase/firebase.config"

// const provider = new GoogleAuthProvider();
// // import { getAuth } from "firebase/auth";

// const auth = getAuth();

// const LoginDemo = () => {

//     const handleLogin =() =>{
//         // console.log("Btn Clicked")
//         signInWithPopup(auth, provider)
//           .then((result) => {  
//             const user = result.user;
//             alert("Login successfull")
//           })
//           .catch((error) => {
//             // Handle Errors here.
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorMessage)
//           });
//     }
    
//   return (
//     <div className="m-5 p-5">
//       <button className="btn btn-primary px-4 text-white" onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default LoginDemo;



