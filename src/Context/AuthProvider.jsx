import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { auth } from '../firebase/firebase.init';
import { toast } from 'react-toastify';

export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [Loading, setLoading] = useState(true);
    // create user 
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // signIn user 
    const signIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    // user information update 
    const updateUser = (updateData)=>{
        setLoading(true);
        return updateProfile(auth.currentUser, updateData)
    }
    // logout user 
    const logOut = ()=>{
        setLoading(true);
        
        signOut(auth)
        .then(()=>{
            toast.success("User LogOut SuccessFull")
        })
        .catch(err=>{
            toast.error(err.message)
        })
        
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        setUser,
        Loading,
        setLoading,
        createUser,
        signIn,
        logOut,
        updateUser
    }
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
};

export default AuthProvider;