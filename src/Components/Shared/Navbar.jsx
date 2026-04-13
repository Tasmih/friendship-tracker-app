import React from 'react';
import logoImg from '../../assets/Images/logo.png';
import { Link, NavLink } from 'react-router';
import MyNavLink from '../MyNavLink';

const Navbar = () => {
    const  navItems = [
        {
            path:"/",
            text: "Home",
        },
        {
            path:"/timeline",
            text: "Timeline",
        },
        {
            path:"/stats",
            text: "Stats",
        }
    ]

    return (
       <nav className='flex justify-between gap-4 items-center bg-white py-[8px] container mx-auto'>

        <img src={logoImg} alt='' className='w-[80px]'/>
        <ul className='flex justify-end gap-4 items-end'>
        {

            navItems.map((item,index)=> <MyNavLink key={index} to={item.path}>{item.text}</MyNavLink>)
        }
        
         {/* <li>
            
            <MyNavLink to={'/'}>Home</MyNavLink>
            </li>
         <li>
           <MyNavLink to={"/timeline"} >Timeline</MyNavLink>
         </li>
         <li>
            <MyNavLink to={"/Stats"}>Stats</MyNavLink>
            </li> */}
        </ul>
        
    
  </nav>
    );
};

export default Navbar;
