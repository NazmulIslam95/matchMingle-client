/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "./../../firebase/firebase.config";
// import useAxiosPublic from "./../../Hooks/useAxiosPublic"; //TODO: uncomment this when implement JWT

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const axiosPublic = useAxiosPublic();  //TODO: uncomment this when implement JWT

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Current user", currentUser);
      setLoading(false);
      // if (currentUser) {
      //   const userInfo = { email: currentUser.email };
      //   axiosPublic.post("/jwt", userInfo).then((res) => {
      //     if (res.data.token) {
      //       localStorage.setItem("access-token", res.data.token);
      //       setLoading(false);
      //     }
      //   });
      // } else {
      //   localStorage.removeItem("access-token");
      //   setLoading(false);
      // }
    });
    return () => {
      return unSubscribe();
    };
    // }, [axiosPublic]); TODO: uncomment this when implement JWT
  }, []); //TODO: comment this when implement JWT

  const authInfo = {
    user,
    loading,
    createUser,
    updateUserProfile,
    signIn,
    logOut,
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
