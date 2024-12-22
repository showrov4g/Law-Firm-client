import React from 'react';
import NavBar from '../Compontents/NavBar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;