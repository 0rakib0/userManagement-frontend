import { createContext, useEffect, useState } from "react"
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase.config";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ( {children} ) =>{
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleAuth = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const Logout = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() =>{
        const unsubsCripe = onAuthStateChanged(auth, currentUser =>{
            setLoading(false)
            setUser(currentUser)
        })
        return () => unsubsCripe
    },[])



    const authInfo = {
        user,
        createUser,
        signIn,
        Logout,
        googleAuth,
        name:'Rakibul',
        loading,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider