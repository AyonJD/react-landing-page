import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs'
import './WinTheWorld.css'

const WinTheWorld = () => {
    return (
        <div>
            <div className="win-the-world flex">
                <div className="left">
                    <h1 className='speak-to-win'><span className='custom-color'>Speak</span> to<br/> win the<br/> world</h1>
                    <p className='speak-to-win-text'>A word can change your life & peresonality in the world, in this course can can find everything.</p>
                    <div className="button">
                        <p>Get Started Now</p>
                        <BsArrowUpRight></BsArrowUpRight>
                    </div>
                </div>
                <div className="right">
                    <img src="images/Pattern.svg" alt="" />
                </div>
            </div>
            <div className="counter"></div>
        </div>
    );
};

export default WinTheWorld;