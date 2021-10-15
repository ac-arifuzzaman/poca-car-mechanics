import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/LogIn/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setisLoading] = useState(true)
    const auth = getAuth();

    const signinUsingGoogle = () => {
        setisLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(
                () => setisLoading(false)
            );
    }
    // observe user state, nothing to do this function just declare it for better performance
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setisLoading(false);
        })
        return () => unsubscribe
    }, [])

    const logOut = () => {
        setisLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(
                () => setisLoading(false)
            )
        // .then(()=>{setUser()})
    }

    return {
        user,
        isLoading,
        signinUsingGoogle,
        logOut
    }
}

export default useFirebase;