import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../../Firebase/firebase.init';
import axios from 'axios';

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
//   createUser
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
//   signInUser
  const signInUser = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
  }
  // logOut
  const signOutUser = () => {
    setLoader(true);
    return signOut(auth);
  };

  // currentUser
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(currentUser?.email){
        const user = {email: currentUser.email}
        axios.post("http://localhost:5000/jwt", user, {withCredentials:true})
        .then(res=>{
          console.log('login token',res.data);
        })
      }
      else{
        axios.post("http://localhost:5000/logout",{},{
          withCredentials:true
        })
        .then(res=> console.log('logout token',res.data))
      }
      setLoader(false);
    });
    return () => {
      unsubscribe;
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    createUser,
    signInUser,
    signOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;