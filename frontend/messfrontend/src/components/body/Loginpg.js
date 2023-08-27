import React, { useState } from 'react';
import Navbar from '../header/Navbar';
import Button from '../header/Button';
import { Link, useNavigate } from 'react-router-dom';
import "../stylesheets/loginpg.css";
import axiosConfig from '../../configs/axiosConfig';
const Loginpg = ({setValidUser}) => {


  const [loginUserData, setLoginUserData] = useState({
    email: "",
    password: ""
  })
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    // setIsValid(/^[a-zA-Z]+$/.test(value))
    setLoginUserData({
      ...loginUserData,
      [name]: value
    })
    
  }


  const handleLogin = async () => {
    try {
      const response = await axiosConfig.post("/signin",loginUserData);
      const data = response.data;
      if(response.status === 200){
        if(data.role === "ROLE_CUSTOMER"){
          
          sessionStorage.setItem("customerData", JSON.stringify(data));
          setValidUser(true);
          navigate('/customer/home', { state: { data } });
        }else{
          sessionStorage.setItem("adminData", JSON.stringify(data));
          navigate("/admin/home",{state:{data}});
        }
        
      }
      // if(data.status ==="Success"){
        
      // }

      
    } catch (error) {
      console.log(error);
    }

  }




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
            value={loginUserData.email}
            name='email'
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            
            name='password'
            onChange={(e) => changeHandler(e)}
          />
        </div>

        <Button classname="btn btn-md  customBtn text-light" btnText="Login" clickType="button" onClick={handleLogin}/>
        
        <p>OR</p>
        <Link to="/register">
          <Button classname="btn btn-md  customBtn text-light" btnText="Register" />
        </Link>

      </div>
    </>
  );
};

export default Loginpg;
