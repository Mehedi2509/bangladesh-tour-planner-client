import initializeAuthentication from "../pages/loginProcess/firebase/firebase.initialize";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();

    // Google sign in
    const signInGoogle = () => {
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)
    }

    // Store sign in user
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [])

    // Sign out
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    return {
        user,
        setUser,
        signInGoogle,
        logOut
    }
}

export default useFirebase;