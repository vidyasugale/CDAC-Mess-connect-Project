import React, { useState } from 'react';
import Navbar from '../header/Navbar';
import Button from '../header/Button';
import { Link, useNavigate } from 'react-router-dom';
import "../stylesheets/loginpg.css";
import axiosConfig from '../../configs/axiosConfig';
import Footer from '../footer/Footer';
const Loginpg = ({ setValidUser }) => {

  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPass, setInvalidPass] = useState(false);
  const [loginUserData, setLoginUserData] = useState({
    email: "",
    password: ""
  })
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setLoginUserData({
      ...loginUserData,
      [name]: value
    })

  }
  const validateEmail = (e) => {
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e.target.value)) {
      setInvalidEmail(false);
      changeHandler(e);
    }
    else {
      setInvalidEmail(true);
    }
  }


  const showPassword = (id) => {
    var x = document.getElementById(id);
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


  const validatePassword = (e) => {
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(e.target.value)) {
      setInvalidPass(false);
      changeHandler(e);
    }
    else {
      setInvalidPass(true);
    }
  }


  const handleLogin = async (e) => {
    e.preventDefault();

    if (invalidEmail) {
      alert("Invalid email!!!");

    } else if (invalidPass) {
      alert("Invalid Password!!!");
    }
    else {
      try {
        const response = await axiosConfig.post("/signin", loginUserData);
        const data = response.data;

        if (response.status === 200) {
          if (data.role === "ROLE_CUSTOMER") {
            console.log(data);
            sessionStorage.setItem("customerData", JSON.stringify(data));
            navigate('/customer/home', { state: { data } });
          } else {
            sessionStorage.setItem("adminData", JSON.stringify(data));
            console.log(data);
            navigate("/admin/home", { state: { data } });
          }

        }

      } catch (error) {
        alert("Please fill valid details!!!");
        console.log(error);
        window.location.reload();
      }
    }


  }




  return (
    <>
      <Navbar homePath="/" />
      <div className="login-container">

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
          <input className='inputs'
            type="email"
            id="email"

            name='email'
            onChange={(e) => validateEmail(e)}
          />
          <div>
            {invalidEmail && <><div>Invalid Email format!!!</div></>}
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className='inputs'
            name='password'
            onChange={(e) => validatePassword(e)}
          />

          <div>
            <input className="m-1" type="checkbox" name="" id="" onClick={() => showPassword("password")} /><span>Show</span>
          </div>

        </div>


        <Button classname="btn btn-md  customBtn text-light mb-3" btnText="Login" clickType="button" onClick={handleLogin} />
        <div>

          <div>Don't have an account?</div>
          <Link to="/register">
            <Button classname="btn btn-md  customBtn text-light" btnText="Register" />
          </Link>

        </div>


      </div>
      <Footer homePath="/" />
    </>
  );
};

export default Loginpg;
