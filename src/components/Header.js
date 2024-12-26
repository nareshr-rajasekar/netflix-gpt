import { signOut } from "firebase/auth";
import { useSelector } from "react-redux"
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
const Header = () =>{
    const user = useSelector((store) => store.user)

    
    const navigate = useNavigate()

    const handleSignOut = () =>{
        signOut(auth).then(() => {
            navigate('/')
          }).catch((error) => {
            // An error happened.
          });
    }

    
    return (
        <div className="flex justify-between items-center w-full absolute  bg-gradient-to-b from-black">
                    <div className=" w-44 z-20 px-8 py-2">
                <img  alt="logo" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>
            </div>
            {
                user?.displayName && <div className="m-2" onClick={handleSignOut}>{"Welcome " + user?.displayName + " !! " }Sign Out</div>
            }
            
        </div>
       
    )
}

export default Header;