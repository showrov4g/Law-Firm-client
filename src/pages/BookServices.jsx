import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const BookServices = () => {
    const {user} = useContext(AuthContext);
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch(`https://server-rho-liart-69.vercel.app/my-purchase?email=${user?.email}`)
    },[])
    return (
        <div>
            
        </div>
    );
};

export default BookServices;