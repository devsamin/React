import React from 'react';
import profile from '../../assets/images/profile.jpg'
import './Header.css'
const Header = () => {
    return (
        <header className='flex justify-between  p-5 border-b-2 w-6xl mx-auto' >
            <h1 className='text-5xl font-bold'>Knolwedge Cafe</h1>
            <img className='profile-img' src={profile} alt="" />
        </header>
    );
};

export default Header;