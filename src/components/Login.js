import { checkValidate } from "../utils/validate";
import Header from "./Header";
import {use, useRef, useState} from "react"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";

const Login = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)
    const [isSignForm, setIsSignForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    const handleClick = () =>{
        const validationCheck = checkValidate(email?.current.value, password?.current.value)        
        setErrorMessage(validationCheck)
        if (errorMessage) return null
        if(isSignForm){
            signInWithEmailAndPassword (auth, email?.current.value, password?.current.value)
            .then((userCredential) => {
               
                
                // Signed in 
                const user = userCredential?.user
                    
                    // dispatch(addUser({
                    //     displayName : user?.displayName,
                    //     email : user?.email,
                    //     uid : user?.uid,
                    //     photoURL : user?.photoURL
                    //   }))
                   
                    navigate('/browse')
                // ...
            })
            .catch((error) => {
                console.error(error);
                
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " - " + errorMessage)
            });
        }else{
            createUserWithEmailAndPassword(auth, email?.current.value, password?.current.value)
            .then((userCredential) => {             
             
              updateProfile(auth.currentUser, {
                displayName: name?.current.value, photoURL: "https://avatars.githubusercontent.com/u/192721077?s=400&u=1e0c8ffdcc8eeb8157d107ecbbb8e0c6f79b2414&v=4"
              }).then(() => {
                const user = auth.currentUser
                console.log("auth.currentUser", auth.currentUser);
                
                    
                    dispatch(addUser({
                        displayName : user?.displayName,
                        email : user?.email,
                        uid : user?.uid,
                        photoURL : user?.photoURL
                      }))
                    navigate('/browse')
                    
              }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " - " + errorMessage)
              });
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + " - " + errorMessage)
              // ..
            });
        }

        
        
        
    }

    const handleFormToggle = () =>{
        setIsSignForm(!isSignForm)
    }
    return (
    <div>
        <Header/>
      
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_large.jpg" alt="bg img" />
        </div>
        <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black p-12 w-3/12 my-36 mx-auto right-0 left-0 opacity-80"> 
        <h1 className="text-white">{isSignForm ? 'Sign In' : 'Sign Up'}</h1>
      { !isSignForm && <input
            ref={name} 
            placeholder="Enter name"
            className="m-4 p-4 w-full"/>}
            <input
            ref={email} 
            placeholder="Enter Email Address"
            className="m-4 p-4 w-full"/>
            <input 
            ref={password}
            placeholder="Enter Password" 
            className="m-4 p-4 w-full"/>
            <button className="p-4 m-4 bg-red-600 w-full" onClick={handleClick}>Submit</button>
            {errorMessage && <p className="text-red-700 m-2 p-2">{errorMessage}</p>}

            <div className="cursor-pointer hover:underline text-white" onClick={handleFormToggle}>
                {isSignForm ? 'Doesn\'t have an account? Create now !!' : 'Already have an account. Sign In'}
            </div>
        </form>
    </div>)
}

export default Login;