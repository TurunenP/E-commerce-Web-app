// //AuthProvider

// import React, { createContext, useEffect, useState } from 'react'
// import app from "../firebase/firebase.config.js";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithPopup,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";
// import { GoogleAuthProvider } from 'firebase/auth/cordova'
// import { setUserId } from 'firebase/analytics';

// export const AuthContext = createContext()
//  const auth = getAuth();
//  const googleProvider = new GoogleAuthProvider();

// const AuthProvider = ({children}) => {
//  const [user, setUser] = useState(null);
//  const [loading, setLoading] = useState(true);

//  //create user

//  const createUser = (email, password) => {
//   setLoading(true)
//   return createUserWithEmailAndPassword(auth, email, password) 
//  }

//  //create user using gmail
//  const signupWithGmail = () => {
//   setLoading(true)
//   return signInWithPopup(auth, GoogleAuthProvider)
//  }

//  //login
//  const login = (email, password) => {
//   setLoading(true)
//   return signInWithEmailAndPassword(auth, email, password);
//  }

//  //signout
//  const logout = () => {
//   return signOut(auth)
//  }

//  //check if user is available
//  useEffect(()=> {
//   const unsubscribe = onAuthStateChanged(auth, currentuser => {
//     setUser(currentuser)
//     setLoading(false)
//   }) 
//   return () => {
//     return unsubscribe()
//   }
//  })

//     const authInfo={
//       user, loading, createUser, signupWithGmail, login, logout      
//     }
//   return (
//     <AuthContext.Provider value={authInfo}>
//         {children}
//     </AuthContext.Provider>
//   )
// }

// export default AuthProvider


//AuthProvider.jsx

import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth"; 

export const AuthContext = createContext();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //create user using gmail
  const signupWithGmail= () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider); 
  };

  //login
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //signout
  const logout = () => {
    return signOut(auth);
  };

  //check if user is available
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signupWithGmail,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
