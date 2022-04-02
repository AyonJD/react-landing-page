import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
import { BsTwitter, BsGoogle } from 'react-icons/bs'
import { FaLinkedinIn, FaPinterestP } from 'react-icons/fa'

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className="bg-white h-[80px] flex items-center">
            <nav className='flex justify-between items-center md:container mx-auto '>
            <div className="logo">
                <Link to={'/'}><h1>Speak.</h1></Link>
            </div>
            <div className="flex menu-item">
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/features'}>Features</CustomLink>
                <CustomLink to={'/shop'}>Shop</CustomLink>
                <CustomLink to={'/about'}>About Us</CustomLink>
                <CustomLink to={'/contact'}>Contact Us</CustomLink>
            </div>
            <div className="icon flex">
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                    <BsTwitter className='single-icon mx-4'></BsTwitter>
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                    <FaLinkedinIn className='single-icon mx-4'></FaLinkedinIn>
                </a>
                <a href="https://google.com" target="_blank" rel="noreferrer">
                    <BsGoogle className='single-icon mx-4'></BsGoogle>
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noreferrer">
                    <FaPinterestP className='single-icon mx-4 pinterest'></FaPinterestP>
                </a>
            </div>
        </nav>
        </div>
    );
};

export default Header;