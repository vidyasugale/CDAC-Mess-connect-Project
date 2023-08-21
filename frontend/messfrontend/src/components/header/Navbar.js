import Button from "./Button";

const Navbar = () => {
    return (<>

        <div className="navbar d-flex text-secondary">
            <div className="col-lg-4 col-md-4 col-4">
                <img className="img-fluid" style={{ width: "20vw" }} src="https://webdesigndev.com/wp-content/uploads/2021/10/banner-image.jpg" alt="" srcset="" />
            </div>

            <div className="nav_bar  d-flex p-3 p-sm-1 col-lg-8 col-md-8  col-8" >



                <div className="justify-content-end align-items-end" style={{ right: "0" }} >
                    <Button classname="btn btn-md me-2 text-secondary" btnText="LOGIN" />
                    <Button classname="btn btn-md text-secondary" btnText="REGISTER" />


                </div>
            </div>

        </div>
    </>);
}

export default Navbar;