 
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)          
    };

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth , currentUser => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe();
        }
    },[])

    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const provider = new GoogleAuthProvider();

        const signInWithGoogle = () => {
            return signInWithPopup(auth,provider)
        } 

        

    const userInfo = {
        user,
        createUser,
        logOut,
        signIn,
        signInWithGoogle,
        loading
    };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
