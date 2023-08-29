import { useState } from "react";
import Navbar from "../header/Navbar";
import axiosConfig from "../../configs/axiosConfig";
import Button from "../header/Button";
import { Link, useNavigate } from 'react-router-dom';
import "../stylesheets/registerpg.css";
import Footer from "../footer/Footer";

const Registerpg = () => {

    const [registerUserData, setRegisterUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        role: "",
        password: "",
        address: ""
    })

    
    const [invalidFirstName, setInvalidFirstName] = useState(false);
    const [invalidLastName, setInvalidLastName] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [invalidPass, setInvalidPass] = useState(false);
    const [invalidAddress, setInvalidAddress] = useState(false);
    const [invalidMobile, setInvalidMobile] = useState(false);
    const [invalidRole, setInvalidRole] = useState(false);
    const navigate = useNavigate();


    const validateFirstName = (e) => {
        if (/^[a-zA-Z]{3,30}$/.test(e.target.value)) {
            setInvalidFirstName(false);
            changeHandler(e);
        }
        else {
            setInvalidFirstName(true);
        }
    }


    const validateLastName = (e) => {
        if (/^[a-zA-Z]{3,30}$/.test(e.target.value)) {
            setInvalidLastName(false);
            changeHandler(e);
        }
        else {
            setInvalidLastName(true);
        }
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

    const validateAddress = (e) => {
        if (/^.{5,}$/.test(e.target.value)) {
            setInvalidAddress(false);
            changeHandler(e);
        }
        else {
            setInvalidAddress(true);
        }
    }

    const validateMobile = (e) => {
        if (/^\d{10}$/.test(e.target.value)) {
            setInvalidMobile(false);
            changeHandler(e);
        }
        else {
            setInvalidMobile(true);
        }
    }


    const validateRole = (e) => {
        if (e.target.value !== "") {
            setInvalidRole(false);
            changeHandler(e);
        }
        else {
            setInvalidRole(true);
        }
    }

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setRegisterUserData({
            ...registerUserData,
            [name]: value
        })
    }
    const submitRegister = async (event) => {
        event.preventDefault();
        if (invalidFirstName || invalidLastName || invalidEmail || invalidPass || invalidAddress || invalidRole) {
            alert("invalid data filled!!!");
            window.location.reload();
        } else {
            await axiosConfig.post("/user/signup", registerUserData)
                .then(response => {
                    alert("New User Registration Successful");
                    console.log(response.data);
                    navigate("/login");
                })
                .catch(error => {
                    alert("provide valid details!!!");
                })
        }

    }


    return (
        <>
            <Navbar homePath="/"/>
            <div className="container mt-5 p-3 border registerdiv" style={{ width: "60%" }}>
                <div className="" style={{ position: "relative", height: "5rem" }}>
                    <div className="largeFont zIndBack registerHeadOut" style={{ left: "20%" }}>
                        Register
                    </div>
                    <div className="smallFont zIndFront registerHeadIn" style={{}}>
                        Register
                    </div>
                </div>


                <form>
                    <div className="mb-3">
                        <label htmlFor="firstname" className="form-label">First Name</label>
                        <input type="text" name="firstName" className="form-control" id="firstname" aria-describedby="" required={true} onChange={(e) => e ? validateFirstName(e) : ""} />
                        <div>
                            {invalidFirstName && <><div>Invalid First Name!!!</div></>}
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="lastname" className="form-label">Last Name</label>
                        <input type="text" name="lastName" className="form-control" id="lastname" aria-describedby="" onChange={(e) => e ? validateLastName(e) : ""} />
                        <div>
                            {invalidLastName && <><div>Invalid Last Name!!!</div></>}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" required={true} onChange={(e) => e ? validateEmail(e) : ""} />
                        <div>
                            {invalidEmail && <><div>Invalid Email!!!</div></>}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="col-form-label">Password</label>
                        <input type="password" name="password" id="password" className="form-control" aria-describedby="passwordHelpInline" required={true} onChange={(e) => e ? validatePassword(e) : ""} />
                        <input className="m-1" type="checkbox" name="" id="" onClick={() => showPassword("password")} /><span>Show</span>
                        <div>
                            {invalidPass && <><div>Invalid Password!!!</div></>}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">address</label>
                        <textarea className="form-control" id="address" rows="3" name="address" onChange={(e) => e ? validateAddress(e) : ""}></textarea>
                        <div>
                            {invalidAddress && <><div>Minimum 5 charaters required!!!</div></>}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mobile" className="form-label">Mobile no</label>
                        <input name="phone" type="number" className="form-control" id="mobile" aria-describedby="" required={true} onChange={(e) => e ? validateMobile(e) : ""}

                        />
                        <div>
                            {invalidMobile && <><div>Only 10 digits are allowed for mobile Number!</div></>}
                        </div>
                    </div>
                    <div className="">
                        <label htmlFor="role" className="form-label">Role</label>
                        <select name="role" className="form-select" id="role" required={true} onChange={(e) => e ? validateRole(e) : ""}>
                            <option selected disabled value="">-- Select role --</option>
                            <option value="ROLE_ADMIN">Admin</option>
                            <option value="ROLE_CUSTOMER" >Customer</option>
                        </select>
                        <div>
                            {invalidRole && <><div>Invalid Role!!!</div></>}
                        </div>
                    </div>
                    <Button classname="btn btn-md ps-3 pe-3 mt-1 me-5 customBtn text-light" btnText="Register" clickType="submit" onClick={submitRegister} />
                    <div>

                    </div>
                    <span>Already have an account?</span>
                    <Link to="/login" style={{textDecoration:"none"}}>
                        <span className="ms-1" style={{color: "#e26d00"}}>
                            Login
                        </span>
                        
                    </Link>
                </form>
            </div>
            <Footer homePath="/"/>

        </>
    )
}

export default Registerpg;