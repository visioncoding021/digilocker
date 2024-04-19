import React from 'react';
import { NavLink } from 'react-router-dom';
const Mobile = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-slate-300">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg w-96">
                <p className="text-2xl font-semibold mb-6 text-gray-800">Sign In to Your Account!</p>
                <nav className="mb-10 flex justify-center">

         <li className=' list-none'><NavLink to="/mobile" activeClassName="text-white" className= "text-lg font-semibold bg-blue-600 text-white px-6 py-2 rounded-lg">Mobile</NavLink></li>
          <li className=' list-none'><NavLink to="/email" activeClassName="text-white" className="text-lg font-semibold px-6 py-2 text-blue-950 rounded-r-lg">Email</NavLink></li>
          <li className=' list-none'><NavLink to="/adhar" activeClassName="text-white" className="text-lg font-semibold px-6 py-2 text-blue-950 rounded-r-lg">Aadhaar</NavLink></li>
                </nav>
                <div className="mb-6">
                    <input className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:border-blue-500" type="text" placeholder="Enter Mobile No." />
                    <p className="text-sm mt-2 text-gray-500">Enter your registered Mobile number</p>
                </div>
                <button className="btn bg-green-400 hover:bg-green-500 text-white py-2 px-6 rounded-md w-full transition duration-300 ease-in-out transform hover:scale-105" type="submit">Next</button>
                <p className="mt-4  text-black text-sm">Don't have an account? Sign Up</p>
            </div>
           
        </div>
    );
};

export default Mobile;
