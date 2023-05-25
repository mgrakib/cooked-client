import React from 'react';
import NavBar from '../Share/NavBar';
import HeroSection from '../components/HeroSection';
import Footer from '../Share/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <Outlet />
    );
};

export default Main;