import React, { useState, useEffect } from 'react';
//import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <div>
        <label className="block mb-2">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block mb-2">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Login
      </button>
    </form>
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
