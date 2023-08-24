
import React, { useState } from 'react';
import LoginCss from "./LoginCss.css";
import Navbar from '../header/Navbar';
const Login = () => {
    
    
//   const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // console.log('Logging in with:', username, email, password);
  };

  const handleRegister = () => {
    // console.log('Registering:', username, email, password);
  };

  return (
    <>
    
    
    
    <div className="login-container">
    
      <h2>Log-in</h2>
      {/* <div className="input-group">
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div> */}
      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Log In</button>
      <p>OR</p>
      <button onClick={handleRegister}>Register</button>
    </div>
    </>
  );
};

export default Login;
