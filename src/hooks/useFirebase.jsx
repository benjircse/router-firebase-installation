 import { useState } from "react"
import app from "../firebase-inte";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect } from "react";
 const auth = getAuth(app)
 const provider = new GoogleAuthProvider();
 const useFirebase = () =>{
  const [user ,setUser] = useState({});

   const singInWidthGoogle= ()=>{
     signInWithPopup(auth,provider)
     .then(result=>{
      const user = result.user
      console.log(user)
      setUser(user)
     }).catch(error=>{
      console.log(error)
     })
    }

      const hendelSingOut= ()=>{
        signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
      }

    useEffect(()=>{
      onAuthStateChanged(auth, user=>{
        setUser(user)
      })
    },[])

return {user, singInWidthGoogle,hendelSingOut};
 }

 export default useFirebase;