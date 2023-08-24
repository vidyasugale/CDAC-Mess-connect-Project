import React, { useState } from 'react';
import Navbar from '../header/Navbar';
import Button from '../header/Button';
const Loginpg = () => {


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
      <Navbar />
      <div className="login-container ">

        <div className="" style={{ position: "relative", height: "5rem" }}>
          <div className="largeFont zIndBack registerHeadOut" style={{ left: "20%" }}>
            Log-in
          </div>
          <div className="smallFont zIndFront registerHeadIn" style={{}}>
            Log-in
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
        <Button classname="btn btn-md mt-3 border" btnText="Login" onClick={handleLogin} />
        <p>OR</p>
        <Button classname="btn btn-md border" btnText="Register" onClick={handleRegister} />
      </div>
    </>
  );
};

export default Loginpg;
