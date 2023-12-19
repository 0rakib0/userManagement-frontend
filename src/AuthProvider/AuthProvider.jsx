import { createContext, useState } from "react"
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase.config";

const auth = getAuth(app)

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
        loading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleAuth = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const Logout = () =>{
        return signOut(auth)
    }

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