import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs'
import './WinTheWorld.css'
// import person from 'person.png'

const WinTheWorld = () => {
    return (
        <div>
            <div className="win-the-world flex pb-20">
                <div className="left px-32 w-1/2 mt-10">
                    <h1 className='speak-to-win'><span className='custom-color'>Speak</span> to<br /> win the<br /> world</h1>
                    <p className='speak-to-win-text'>A word can change your life & peresonality in the world, in this course can can find everything.</p>
                    <div className="button flex items-center cursor-pointer w-fit">
                        <p className='button-text'>Get Started Now</p>
                        <div className="p-2 rounded-full button-icon max-w-fit">
                            <BsArrowUpRight className='text-white'></BsArrowUpRight>
                        </div>
                    </div>
                </div>
                <div className="right w-1/2 self-end">
                    <img src="images/Pattern.svg" alt="" />
                </div>
            </div>
            <div className="counter flex relative px-32 w-full">
                <div className="counter-left flex justify-between w-3/5 items-center">
                    <div className="counter-text_one">
                        <h1>1.926</h1>
                        <p>Finished Session</p>
                    </div>
                    <div className="counter-text_two">
                        <h1>100%</h1>
                        <p>Satisfiction Rate</p>
                    </div>
                    <div className="counter-text_three">
                        <h1>30K</h1>
                        <p>Learners</p>
                    </div>
                    <div className="counter-text_four">
                        <h1>200</h1>
                        <p>Online Instructor</p>
                    </div>
                </div>
                <div className="counter-right absolute bottom-0 right-0 pr-20">
                    <img className='h-[800px]' src="images/person.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default WinTheWorld;