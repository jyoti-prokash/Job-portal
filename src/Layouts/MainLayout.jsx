import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div>
            <header><Navbar></Navbar></header>
            <section><Outlet></Outlet></section>
            <section><Footer></Footer></section>
        </div>
    );
};

export default MainLayout;