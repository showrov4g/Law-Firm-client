import React from 'react';
import NavBar from '../Compontents/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Compontents/Footer';

const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='min-h-screen'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;