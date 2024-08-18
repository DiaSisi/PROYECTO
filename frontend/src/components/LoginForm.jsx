import React, { useState, useEffect } from 'react';
import { IoPersonCircleSharp } from "react-icons/io5";
import './LoginForm.css'

//import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <>
      <div className="max-w-md w-[40vw] mt-[15vh] bg-gradient-to-b from-[#cc99c2] to-[#630099] rounded-xl shadow-2xl overflow-hidden p-8 space-y-8 mx-auto" >

        <h2 className="text-center text-4xl font-extrabold text-white"> Welcome </h2>
        <span href="#" className="flex justify-center text-white rounded-full">
          {" "} <IoPersonCircleSharp size={100} />{" "}
        </span>

        <p className="text-center text-gray-200 mt-0">
          Sign in to your account
        </p>
        <form method="POST" action="#" className="space-y-6">
          <div className="relative">
            <input placeholder="john@example.com" className="peer loginInput" required="" id="email" name="email" type="email" />
            <label
              className="loginLabel peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-white peer-focus:text-md"
              for="email"
            > Email address </label>
          </div>
          <div className="relative">
            <input
              placeholder="Password"
              className="peer h-10 w-full border-b-2 border-gray-300 text-black bg-white placeholder-transparent focus:outline-none focus:border-gray-500"
              required=""
              id="password"
              name="password"
              type="password"
            />
            <label
              className="loginLabel peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-white peer-focus:text-md"
              for="password">
              Password </label>
          </div>
          <button type="button" className='btn btn-primary w-[50%]'>
            Sign In
          </button>
        </form>
        <div className="text-center text-gray-300" >
          <p>Don't have an account?</p>
          <a className="text-white hover:underline" href="#">Create new account</a>
        </div>
      </div>
    </>
  );
};

export default LoginForm;



























// import React, { useState, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';

// const LoginForm = () => {
//   return (
//     <div>
//       <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
//         <h1 className="text-4xl text whitefont-bold text-center mb-6">Login</h1>
//         <form action="">
//             <div className="relative my-4">
//               <input type="email" className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus: outline-none focus:ring-0 focus:text-white focus-border-blue-600 peer "/>
//               <label htmlFor="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email</label>
//             </div>
//             <div className="relative my-4">
//               <input type="password" className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus: outline-none focus:ring-0 focus:text-white focus-border-blue-600 peer "/>
//               <label htmlFor="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Password</label>
//             </div>
//             <div>
//               <input type="checkbox" name="" id=""/>
//               <label htmlFor="Remember Me"></label>
//             </div>
//             <span>Forgot Password?</span>
//             <button type="submit">Login</button>
//             {/* <div>
//               <span>New Here? <link to='Register'>Create an Account</link>
//               </span>
//             </div> */}
//         </form>
//     </div>
//     </div>
//   );
// };

// export default LoginForm;
