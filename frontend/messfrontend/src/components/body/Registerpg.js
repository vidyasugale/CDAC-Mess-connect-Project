import { useState } from "react";
import Navbar from "../header/Navbar";
import axiosConfig from "../../configs/axiosConfig";
import Button from "../header/Button";


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

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setRegisterUserData({
            ...registerUserData,
            [name]: value
        })
        console.log(name, value)
    }
    const submitRegister = async (event) => {
        event.preventDefault();
        await axiosConfig.get("/getallusers")
        .then(result => {
            alert("New User Registration Successful");
            console.log(result.data);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <>
            <Navbar/>
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
                        <input type="text" name="firstName" className="form-control" id="firstname" aria-describedby="" required={true} onChange={(e) => e ? changeHandler(e) : ""} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastname" className="form-label">Last Name</label>
                        <input type="text" name="lastName" className="form-control" id="lastname" aria-describedby="" onChange={(e) => e ? changeHandler(e) : ""}/>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" required={true} onChange={(e) => e ? changeHandler(e) : ""}/>

                    </div>
                    <div className="row g-3 align-items-center">
                        <div className="col-auto">
                            <label htmlFor="password" className="col-form-label">Password</label>
                        </div>
                        <div className="col-auto">
                            <input type="password" name="password" id="password" className="form-control" aria-describedby="passwordHelpInline" required={true} onChange={(e) => e ? changeHandler(e) : ""}/>
                        </div>
                        <div className="col-auto">
                            <span id="passwordHelpInline" className="form-text">
                                Must be 8-20 characters long.
                            </span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">address</label>
                        <textarea className="form-control" id="address" rows="3" name="address" onChange={(e) => e ? changeHandler(e) : ""}></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mobile" className="form-label">Mobile no</label>
                        <input name="phone" type="number" className="form-control" id="mobile" aria-describedby="" required={true} onChange={(e) => e ? changeHandler(e) : ""}/>
                    </div>
                    <div className="">
                        <label htmlFor="role" className="form-label">Role</label>
                        <select name="role" className="form-select" id="role" required={true} onChange={(e) => e ? changeHandler(e) : ""}>
                            <option selected disabled value="">-- Select role --</option>
                            <option value="ROLE_ADMIN">Admin</option>
                            <option value="ROLE_CUSTOMER" >Customer</option>
                        </select>
                    </div>
                    <Button classname="btn btn-md mt-3  border" btnText="Register" onClick={submitRegister}/>
                    <button type="button" onClick={submitRegister}>Register</button>
                    <div>OR</div>
                    <Button classname="btn btn-md mt-3  border" btnText="Login" onClick={submitRegister}/>
                    
                </form>
            </div>

        </>
    )
}

export default Registerpg;