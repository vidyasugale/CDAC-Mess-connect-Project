import "./AdminMenu.css";

import { Link} from "react-router-dom";
import Footer from './../footer/Footer';
import Navbar2 from "../header/Navbar2";


const AdminMenu = () => {
  return (
    <>
    <Navbar2/>
                <div className="menu-container">
                <div className="" style={{ position: "relative", height: "5rem" }}>
          <div className="largeFont zIndBack registerHeadOut" style={{ left: "20%" }}>
            Admin Menu
          </div>
          <div className="smallFont zIndFront registerHeadIn" style={{}}>
            Admin Menu
          </div>
        </div>
                  <div className="menu-border">
                    <div className="menu-row">
                      <Link to="/main-menu" className="menu-box" >
                        Main Menu
                      </Link>
                      <Link to="/search-user" className="menu-box">
                        Search User
                      </Link>
                    </div>
                    <div className="menu-row">
                    <Link to="/addons" className="menu-box">
                        Addons
                      </Link>
                      <Link to="/main-courses" className="menu-box">
                        Main Courses
                      </Link>
                      <Link to="/breads" className="menu-box">
                        Breads
                      </Link>
                      
                    </div>
                    <div className="menu-row">
                    <Link to="/rices" className="menu-box">
                        Rices
                      </Link>
                      <Link to="/curries" className="menu-box">
                        Curries
                      </Link>
                      <Link to="/sweets" className="menu-box">
                        Sweets
                      </Link>
                                          
                    </div>
                  </div>
                      <Link to="/add-new-menu"> </Link>
                      <Link to="/admin-menu"> </Link>
                </div>



          
        < Footer/>

      
    </>
  );
};

export default AdminMenu;
