import React from 'react';
import Login from "../../login";
const  Hero = () =>{
    return (
        <div className="block lg:flex lg:space-x-2 px-2 lg:p-0 mb-10 bg-gray-900">
            <div className="w-full lg:w-2/3">
                <section className="hero">
                    <img src="assets/img/finance-professional.png" alt="Finance Professional" className="w-full"/>

                </section>
            </div>
            <div className="w-full lg:w-1/3 px-3">
                <Login />
            </div>
        </div>
    )
}

export default Hero;
