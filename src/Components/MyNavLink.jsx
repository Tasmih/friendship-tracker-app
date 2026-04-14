import React from 'react';
import { NavLink } from 'react-router';

const MyNavLink = ({to, className, children}) => {
    return (
        <NavLink to={to} className={({isActive})=>

              ` font-semibold pb-2  rounded-lg  ${className} ${isActive ? "bg-emerald-900 text-white" :" bg-white text-gray-500"}` } > {children}</NavLink>
            
    );
};

export default MyNavLink;