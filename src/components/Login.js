import { checkValidate } from "../utils/validate";
import Header from "./Header";
import {use, useRef, useState} from "react"

const Login = () =>{
    const email = useRef(null)
    const Password = useRef(null)
    const [errorMessage, setErrorMessage] = useState(null)

    const handleClick = () =>{
        const validationCheck = checkValidate(email?.current.value, Password?.current.value)
        console.log("v", validationCheck);
        
        setErrorMessage(validationCheck)
        
        
        
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
            <input
            ref={email} 
            placeholder="Enter Email Address"
            className="m-4 p-4 w-full"/>
            <input 
            ref={Password}
            placeholder="Enter Password" 
            className="m-4 p-4 w-full"/>
            <button className="p-4 m-4 bg-red-600 w-full" onClick={handleClick}>Submit</button>
            {errorMessage && <p className="text-red-700 m-2 p-2">{errorMessage}</p>}
        </form>
    </div>)
}

export default Login;