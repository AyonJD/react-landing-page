import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='flex'>
            <CustomLink to={'/'}>Home</CustomLink>
            <CustomLink to={'/features'}>Features</CustomLink>
            <CustomLink to={'/shop'}>Shop</CustomLink>
            <CustomLink to={'/about'}>About Us</CustomLink>
            <CustomLink to={'/contact'}>Contact Us</CustomLink>
        </nav>
    );
};

export default Header;