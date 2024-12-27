import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { removeUser, addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
const useAuthStateChange = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()   

    useEffect(() =>{
        
        
      const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              
              
                  dispatch(addUser({
                    displayName : user?.displayName,
                    email : user?.email,
                    uid : user?.uid,
                    photoURL : user?.photoURL
                  }))
                  navigate('/browse')
              
              // ...
            } else {
              // User is signed out
              // ...
               dispatch(removeUser())
               navigate('/')
            }
          });

          return () =>{
            unsubscribe()
          }
    },[])
    
}

export default useAuthStateChange;