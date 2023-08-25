import React, { useState } from 'react';
import Navbar from '../header/Navbar';
import Button from '../header/Button';
import { Link } from 'react-router-dom';
import "../stylesheets/loginpg.css";
const Loginpg = () => {
  

  //   const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // console.log('Logging in with:', username, email, password);
  };



  return (
    <>
      <Navbar />
      <div className="login-container ">

        <div className="" style={{ position: "relative", height: "5rem" }}>
          <div className="largeFont zIndBack registerHeadOut" style={{ left: "20%" }}>
            Login
          </div>
          <div className="smallFont zIndFront registerHeadIn" style={{}}>
            Login
          </div>
        </div>

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
        <Button classname="btn btn-md  customBtn text-light" btnText="Login" onClick={handleLogin} />
        <p>OR</p>
        <Link to="/Register">
        <Button classname="btn btn-md  customBtn text-light" btnText="Register"  />
        </Link>
        
      </div>
    </>
  );
};

export default Loginpg;
