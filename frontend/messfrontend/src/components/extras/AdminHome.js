import "./AdminHome.css";

import { Link} from "react-router-dom";
import AdminFooter from '../footer/AdminFooter';
import AdminNavbar from "../header/AdminNavbar";


const AdminHome = () => {
  return (
    <>
    <AdminNavbar />
                <div className="menu-container">
                <div style={{ textAlign: "center", marginTop: "10px", height: "100px" }}>
          <div className="mt-1" style={{ position: "relative" }}>
            <div className="largeFont zIndBack headingLarge">
              Admin Home
            </div>
            <div className="smallFont zIndFront headingSmall">
              Admin Home
            </div>
          </div>
        </div>
                  <div className="menu-border">
                    <div className="container d-flex justify-content-center align-items-center flex-wrap">
                      <Link to="/select-main-menu" style={{textDecoration:"none"}} className="menu-box" >
                        Select Main Menu
                      </Link>
                      <Link to="/search-user" style={{textDecoration:"none"}} className="menu-box">
                        Search User
                      </Link>
                    </div>
                    <div className="container d-flex justify-content-center align-items-center flex-wrap mt-3">
                    <Link to="/addons" style={{textDecoration:"none"}} className="menu-box">
                        Addons
                      </Link>
                      <Link to="/main-courses" style={{textDecoration:"none"}} className="menu-box">
                        Main Courses
                      </Link>
                      <Link to="/breads" style={{textDecoration:"none"}} className="menu-box">
                        Breads
                      </Link>
                    </div >
                    <div className="container d-flex justify-content-center align-items-center flex-wrap mt-3 mb-5">
                    <Link to="/rices" style={{textDecoration:"none"}} className="menu-box">
                        Rices
                      </Link>
                      <Link to="/curries" style={{textDecoration:"none"}} className="menu-box">
                        Curries
                      </Link>
                      <Link to="/sweets" style={{textDecoration:"none"}} className="menu-box">
                        Sweets
                      </Link>
                    </div>
                  </div>
                      <Link to="/create-new-menu"> </Link>
                      <Link to="/admin/home"> </Link>
                </div>
        <AdminFooter />
    </>
  );
};

export default AdminHome;
