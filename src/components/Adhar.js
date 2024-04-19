import React from 'react';
import { NavLink } from 'react-router-dom';
const Adhar = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-slate-300">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg w-96">
                <p className="text-2xl font-semibold mb-6 text-gray-800">Sign In to Your Account!</p>
                <nav className="mb-10 flex justify-center">
            <li className=' list-none'><NavLink to="/mobile" activeClassName="text-white" className= "text-lg font-semibold  text-black px-6 py-2 rounded-l-lg">Mobile</NavLink></li>
          <li className=' list-none'><NavLink to="/email" activeClassName="text-white" className="text-lg font-semibold px-6 py-2 rounded-r-lg">Email</NavLink></li>
          <li className=' list-none'><NavLink to="/adhar" activeClassName="text-white" className="text-lg font-semibold px-6 py-2 rounded-lg text-white bg-blue-600">Aadhaar</NavLink></li>
                </nav>
                <div className="mb-6">
                    <input className="border border-gray-300 px-4 py-2 rounded-md w-full mb-4" type="text" placeholder="Enter the Adhaar No." />
                </div>
                <button className="btn bg-green-400 hover:bg-green-500 text-white py-2 px-6 rounded-md w-full transition duration-300 ease-in-out transform hover:scale-105" type="submit">Next</button>
                <p className="mt-4 text-sm text-gray-800">Don't have an account? Sign Up</p>
            </div>
        </div>
    );
};

export default Adhar;
