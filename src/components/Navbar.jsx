import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    const [humburgerToggle, setHumBurgerToggle] = useState(false);

    const toggleIcon = () => {
        setHumBurgerToggle(!humburgerToggle);
    }

    return (
        <>


            <header className={`bg-[${props.bg_color}]`}>
                <div className="container-fluid">
                    <div className="py-3 mx-4" style={{ "borderBottom": "1px solid #958b8b" }}>
                        <div className='flex justify-between items-center'>
                            <div className=''>
                                <Link to="/">
                                    <div className="logo flex align-items-center justify-center flex-col">
                                        <img width="50" src="/images/logo.png" alt="logo" />
                                        <span className="text-black text-center block font-Syne fw-bold">DevPavan</span>
                                    </div>
                                </Link>
                            </div>
                            <div className=''>
                                <div className="menu-bar">
                                    <div className="flex items-center justify-between">
                                    <a href="tel:8302088852" className="contact-link">
                                            <div className="font-bold flex items-center">
                                                Let's Talk
                                                <span className="animate-arrow-up pl-2">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </a>

                                        <div className="ml-4">
                                            <div className={`hamburger ${humburgerToggle ? 'active' : ''}`} onClick={toggleIcon}>
                                                <span className="hamburger-line"></span>
                                                <span className="hamburger-line"></span>
                                                <span className="hamburger-line"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </header>

            <div className={`popup h-[100vh] overflow-hidden position-fixed top-0 right-0 z-1 ${humburgerToggle ? 'show' : ''}`}>
                <div className="row">

                    <div className="col-lg-12 bg-[black]">
                        <div className="side-bar-header flex justify-between items-center py-3 px-4">
                            <div className="">
                            <div className="logo flex align-items-center justify-center flex-col">
                                        <img width="50" src="/images/logo_light.png" alt="logo" />
                                        <span className="text-[#ff9330] text-center block font-Syne fw-bold">DevPavan</span>
                                    </div>
                            </div>
                            <div className="">
                                <div className="ml-4">
                                    <div className={`hamburger ${humburgerToggle ? 'active' : ''}`} onClick={toggleIcon}>
                                        <span className="hamburger-line text-white"></span>
                                        <span className="hamburger-line text-white"></span>
                                        <span className="hamburger-line text-white"></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="sidebar-body px-4 mt-10 h-[100vh]">
                            <ul className='m-0 p-0'>
                                <li >
                                    <Link className='py-2 mb-1 d-flex justify-between font-Syne text-[20px] fw-bold' to="/">
                                        Home
                                        <span className="animate-arrow-up pl-2">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </span>
                                    </Link>
                                </li>
                                <li>

                                    <Link className='py-2 mb-1 d-flex justify-between font-Syne text-[20px] fw-bold' to="/about-us">
                                        About
                                        <span className="animate-arrow-up pl-2">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </span>
                                    </Link>

                                </li>
                                <li>
                                    <Link className='contact-linkpy-2 mb-1 d-flex justify-between font-Syne text-[20px] fw-bold' to='/project'>
                                        Project
                                        <span className="animate-arrow-up pl-2">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </span>
                                    </Link>

                                </li>
                              
                                <li >

                                    <Link className='py-2 mb-1 d-flex justify-between font-Syne text-[20px] fw-bold' to="/blog">
                                    Blog
                                        <span className="animate-arrow-up pl-2">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </span>
                                    </Link>
                                

                                </li>
                                <li >
                                    <Link  className='py-2 mb-1 d-flex justify-between font-Syne text-[20px] fw-bold' to="/contact">
                                        Contact
                                        <span className="animate-arrow-up pl-2">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </span>
                                    </Link>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
