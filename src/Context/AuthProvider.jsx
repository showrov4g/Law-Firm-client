import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { createContext } from 'react';
import { auth } from '../firebase/firebase.init';

export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [Loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const authInfo = {
        user,
        setUser,
        Loading,
        setLoading,
        createUser
    }
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
};

export default AuthProvider;