import React, { createContext, useState } from 'react';

const AuthContext = createContext(null)

const AuthProvider = () => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading
    }

    return (
     <AuthContext.Provider value={authInfo}></AuthContext.Provider>
    );
};

export default AuthProvider;