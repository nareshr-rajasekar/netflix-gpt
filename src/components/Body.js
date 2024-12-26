import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./Login";
import Browse from "./Browse";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { removeUser, addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Body = () =>{
  const dispatch = useDispatch()

    useEffect(() =>{
        
        
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              
              
                  dispatch(addUser({
                    displayName : user?.displayName,
                    email : user?.email,
                    uid : user?.uid,
                    photoURL : user?.photoURL
                  }))
              
              // ...
            } else {
              // User is signed out
              // ...
               dispatch(removeUser())
            }
          });
    },[])
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/browse" element={<Browse/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Body;