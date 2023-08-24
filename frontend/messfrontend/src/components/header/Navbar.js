import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
    return (<>

        <div className="navbar d-flex text-secondary mb-1">
            <div className="col-lg-4 col-md-4 col-12 ">
                <img style={{ width: "10vw",alignSelf:"center"}} src="../assets/newlogo.svg" alt="logo" srcset="" />
            </div>

            <div className="nav_bar  d-flex p-lg-3 col-lg-8 col-md-8 col-12 justify-content-center" >
                <div>
                    <Link to="/Login">
                    <Button classname="btn btn-md me-2 text-secondary" btnText="LOGIN" />
                    </Link>
                    
                    <Link to="/Register">
                    <Button classname="btn btn-md text-secondary" btnText="REGISTER" />
                    </Link>
                    
                    <Button classname="btn btn-md text-secondary" btnText="ABOUT US" />
                    <Button classname="btn btn-md text-secondary" btnText="CONTACT" />
                </div>
            </div>

        </div>
    </>);
}

export default Navbar;