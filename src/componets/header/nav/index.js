import React from 'react';
import "./nav.css";
const Nav = () =>{
    const demoUrl="/";
    return (
        <div className="bg-indigo-900 px-4 py-4">
            <div
                className="md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between"
            >
                <div className="flex justify-between items-center">
                    <a href="#" className="inline-block py-2 text-white text-xl font-bold"
                    >React Stock</a
                    >
                    <div
                        className="inline-block cursor-pointer md:hidden">
                        <div className="bg-gray-400 w-8 mb-2" style={{height: '2px'}} ></div>
                        <div className="bg-gray-400 w-8 mb-2" style={{height: '2px'}}></div>
                        <div className="bg-gray-400 w-8" style={{height: '2px'}}></div>
                    </div>
                </div>

                <div>
                    <div className="hidden md:block">
                        <a
                            href="/"
                            className="inline-block py-1 md:py-4 text-gray-100 mr-6 font-bold"
                        >How it Works</a
                        >
                        <a
                            href="/"
                            className="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-100 mr-6"
                        >Services</a
                        >
                        <a
                            href="/"
                            className="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-100"
                        >Blog</a
                        >
                    </div>
                </div>
                <div className="hidden md:block">
                    <a
                        href="/"
                        className="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-100 mr-6"
                    >Login</a
                    >
                    <a
                        href="/"
                        className="inline-block py-2 px-4 text-gray-700 bg-white hover:bg-gray-100 rounded-lg"
                    >Sign Up</a
                    >
                </div>
            </div>
        </div>
    );
}

export default Nav;
