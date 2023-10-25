import React from 'react';
import Newsletter from './Newsletter';


function Landing() {
  return (
    <>
      
      <div className="h-screen w-screen bg-black flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image URL
            alt="Background"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="bg-black absolute inset-0 opacity-90" />
        </div>
        
        <div className="relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">CodeCollab</h1>
          <p className="text-xl md:text-2xl font-light leading-normal mb-8">
            Collaborate, learn, and code together with fellow developers.
          </p>
          <a
            href="#"
            className="px-5 py-3 text-lg font-medium shadow-md text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-blue-500 hover:bg-blue-600 active-bg-red-500"
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="relative z-20 bg-white  text-center">
      <Newsletter />
      </div>
    </>
  );
}

export default Landing;
