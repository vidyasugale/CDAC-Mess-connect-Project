import Button from "./Button";

const Navbar = () => {
    return (<>

        <div className="navbar d-flex text-secondary mb-1">
            <div className="col-lg-4 col-md-4 col-12 ">
                <img style={{ width: "10vw",alignSelf:"center"}} src="../assets/logo.svg" alt="logo" srcset="" />
            </div>

            <div className="nav_bar  d-flex p-lg-3 col-lg-8 col-md-8 col-12 justify-content-center" >
                <div>
                    
                    <Button classname="btn btn-md me-2 text-secondary" btnText="LOGIN" />
                    <Button classname="btn btn-md text-secondary" btnText="REGISTER" />
                    <Button classname="btn btn-md text-secondary" btnText="ABOUT US" />
                    <Button classname="btn btn-md text-secondary" btnText="CONTACT" />
                </div>
            </div>

        </div>
    </>);
}

export default Navbar;