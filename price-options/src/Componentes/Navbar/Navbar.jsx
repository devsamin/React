import React, { useState } from 'react';
import Link from '../Link/Link';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {

    const routes = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/about', name: 'About' },
    { id: 3, path: '/services', name: 'Services' },
    { id: 4, path: '/contact', name: 'Contact' },
    { id: 5, path: '/login', name: 'Login' },
    ];
    const [open, setopen] = useState(true)
    return (
       
        <nav className='text-2xl'>
            <div onClick={()=>setopen(!open)} className='md:hidden'>
                {
                    open === true ? <GiHamburgerMenu></GiHamburgerMenu> :
                    <RxCross2></RxCross2>
                }
                
            </div>
            <ul className={`md:flex absolute md:static ${!open ? '' : 'hidden'} p-5 bg-green-300`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
            
        </nav>
    );
};

export default Navbar;