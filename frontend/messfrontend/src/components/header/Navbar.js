import Button from "./Button";

const Navbar = () => {
    return( <>
        <div className="navbar">
            <div className="container">
            <span>MC</span>
            <div style={{textAlign: "centre"}}>
                MESS CONNECT
            </div>
            
            <div style={{textAlign: "end"}}>
                <Button classname="btn btn-md me-2 text-light border border-light" btnText="Login"/>
                <Button classname="btn btn-md text-light border border-light" btnText="Register"/>
                <Button classname="btn btn-sm text-light" btnText="About us"/>

            </div>
            </div>
            
        </div>
    </>);
}

export default Navbar;