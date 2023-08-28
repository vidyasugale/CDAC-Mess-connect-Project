import { Link } from "react-router-dom";
import Button from "./Button";
import "../stylesheets/navbar.css";

const Navbar = () => {
    return (<>

        <div className="navbar d-flex text-secondary mb-1">
            <div className="col-lg-4 col-md-4 col-12 ">
                <Link to="/">
                <img style={{ width: "10vw", marginLeft: "10px"}} src="../assets/newlogo.svg" alt="logo" srcSet="" />
                </Link>
                
            </div>

            <div className="nav_bar  d-flex p-lg-3 col-lg-8 col-md-8 col-12 justify-content-center" >
                <div>
                    <Link to="/login">
                    <Button classname="navbtn btn btn-md" btnText="LOGIN" />
                    </Link>
                    
                    <Link to="/register">
                    <Button classname="navbtn btn btn-md" btnText="REGISTER" />
                    </Link>
                    
                    <Link to="/about">
                    <Button classname="navbtn btn btn-md" btnText="ABOUT US" />
                    </Link>

                    <Link to="/contact">
                    <Button classname="navbtn btn btn-md" btnText="CONTACT" />
                    </Link>
                    
                </div>
            </div>

        </div>
    </>);
}

export default Navbar;