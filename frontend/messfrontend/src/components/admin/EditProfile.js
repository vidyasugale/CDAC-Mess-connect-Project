import Navbar2 from "../header/Navbar2"
import Footer from "../footer/Footer"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axiosConfig from "../../configs/axiosConfig"
import Button from "../header/Button"

const EditProfile = () => {
    const [editData,setEditData] = useState({});
    const [editUserData, setEditUserData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        address: ""
    })
    useEffect(() => {
        console.log(JSON.parse(sessionStorage.getItem("adminData")));
        // const data = JSON.parse(sessionStorage.getItem("customerData"))
        // console.log(data)
        const getUserData = async() =>{
            await axiosConfig.get(`/user/getuser/${data.id}`)
            .then( response =>{
                setEditData(response.data);
                setEditUserData({
                    firstName: `${response.data.firstName}`,
                    lastName: `${response.data.lastName}`,
                    phone: `${response.data.phone}`,
                    address: `${response.data.address}`
                })
            }).catch(e => console.log(e))

        }
        getUserData();
    },[])
    const [invalidFirstName, setInvalidFirstName] = useState(false);
    const [invalidLastName, setInvalidLastName] = useState(false);
    // const [invalidPass, setInvalidPass] = useState(false);
    const [invalidAddress, setInvalidAddress] = useState(false);
    const [invalidPhone, setInvalidPhone] = useState(false);
    
    const navigate = useNavigate();

    const validateFirstName = (e) => {
        if (/^[a-zA-Z]{3,30}$/.test(e.target.value)) {
            setInvalidFirstName(false);
            changeHandler(e);
        } else {
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

    const validateAddress = (e) => {
        if (/^.{5,}$/.test(e.target.value)) {
            setInvalidAddress(false);
            changeHandler(e);
        }
        else {
            setInvalidAddress(true);
        }
    }

    const validatePhone = (e) => {
        if (/^\d{10}$/.test(e.target.value)) {
            setInvalidPhone(false);
            changeHandler(e);
        }
        else {
            setInvalidPhone(true);
        }
    }

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setEditUserData({
            ...editUserData,
            [name]: value
        })

        console.log(editUserData);
    }

    const submitEditedData = async (event) => {
        event.preventDefault();
        if (invalidFirstName || invalidLastName || invalidAddress || invalidPhone) {
            alert("invalid data filled!!!");
            window.location.reload();
        } 
        else {
            console.log(editUserData)
            await axiosConfig.put(`/user/update/${editData.id}`, editUserData)
                .then(response => {
                    alert("Profile Data Edited");
                    console.log(response.data);
                    navigate("/admin/home");
                })
                .catch(error => {
                    alert("provide valid details!!!");
                })
        }

    }
    
    return (
        <>
            <Navbar2 homePath="/customer/home"/>
            <div className="container mt-5 p-3 border registerdiv" style={{ width: "60%" }}>
                <div className="" style={{ position: "relative", height: "5rem" }}>
                    <div className="largeFont zIndBack registerHeadOut" style={{ left: "20%" }}>
                        Profile
                    </div>
                    <div className="smallFont zIndFront registerHeadIn" style={{}}>
                        Profile
                    </div>
                </div>

                <form>
                    <div className="mb-3">
                        <label htmlFor="firstname" className="form-label">First Name</label>
                        <input type="text" name="firstName" className="form-control" id="firstname" defaultValue={editData.firstName} aria-describedby="" required={true} onChange={(e) => e ? validateFirstName(e) : ""} />
                        <div>
                            {invalidFirstName && <><div>Invalid First Name!!!</div></>}
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="lastname" className="form-label">Last Name</label>
                        <input type="text" name="lastName" className="form-control" id="lastname" defaultValue={editData.lastName} aria-describedby="" onChange={(e) => e ? validateLastName(e) : ""} />
                        <div>
                            {invalidLastName && <><div>Invalid Last Name!!!</div></>}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" readOnly value={editData.email} name="email" className="form-control" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">address</label>
                        <textarea className="form-control" id="address" rows="3" name="address" defaultValue={editData.address} onChange={(e) => e ? validateAddress(e) : ""}></textarea>
                        <div>
                            {invalidAddress && <><div>Minimum 5 charaters required!!!</div></>}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mobile" className="form-label">Mobile no</label>
                        <input name="phone" type="number" className="form-control" id="mobile" defaultValue={editData.phone} aria-describedby="" required={true} onChange={(e) => e ? validatePhone(e) : ""}
                        />
                        <div>
                            {invalidPhone && <><div>Only 10 digits are allowed for mobile Number!</div></>}
                        </div>
                    </div>
                    <Button classname="btn btn-md ps-3 pe-3 mt-1 me-5 customBtn text-light" btnText="Submit" clickType="submit" onClick={submitEditedData} />
                </form>
            </div>
            <Footer homePath="/admin/home" aboutPath="/admin/about" contactPath="/admin/contact" />
        </>
    )
}

export default EditProfile