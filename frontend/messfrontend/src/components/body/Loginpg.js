import React, { useState } from 'react';
import Navbar from '../header/Navbar';
import Button from '../header/Button';
import { Link, useNavigate } from 'react-router-dom';
import "../stylesheets/loginpg.css";
import axiosConfig from '../../configs/axiosConfig';
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

    if (invalidEmail || invalidPass) {
      alert("Invalid data filled!!!");
      window.location.reload();
    } else {
      try {
        const response = await axiosConfig.post("/signin", loginUserData);
        const data = response.data;
        if (response.status === 200) {
          if (data.role === "ROLE_CUSTOMER") {

            sessionStorage.setItem("customerData", JSON.stringify(data));
            setValidUser(true);
            navigate('/customer/home', { state: { data } });
          } else {
            sessionStorage.setItem("adminData", JSON.stringify(data));
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
      <Navbar />
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
            {invalidEmail && <><div>Invalid Email!!!</div></>}
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
            {invalidPass && <><div style={{textAlign:"start"}}>Password must contain
              <ul>
                <li>an Uppercase Letter</li>
                <li>an Lowercase Letter</li>
                <li>a special charater</li>
                <li>a digit</li>
              </ul>


            </div></>}
          </div>
          <div>
            <input className="m-1" type="checkbox" name="" id="" onClick={() => showPassword("password")} /><span>Show</span>
          </div>

        </div>


        <Button classname="btn btn-md  customBtn text-light mb-3" btnText="Login" clickType="submit" onClick={handleLogin} />
        <div>

          <div>Don't have an account?</div>
          <Link to="/register">
            <Button classname="btn btn-md  customBtn text-light" btnText="Register" />
          </Link>

        </div>


      </div>
    </>
  );
};

export default Loginpg;
