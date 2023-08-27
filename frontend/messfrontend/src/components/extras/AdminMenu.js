import "./AdminMenu.css";
import MainCourses from "./MainCourses";
import MainMenu from "./MainMenu";
import Addons from "./Addons";
import Breads from "./Breads";
import Curries from "./Curries";
import Sweets from "./Sweets";
import Rices from "./Rices";
import SearchUser from "./SearchUser";
import Navbar from "../header/Navbar";
import Footer from "../footer/Footer";
import AddNewMenu from "./AddNewMenu"
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";


const AdminMenu = () => {
  return (
    <>
      <BrowserRouter>
      < Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
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
                      <Link to="/main_menu" className="menu-box" >
                        Main Menu
                      </Link>
                      <Link to="/search_user" className="menu-box">
                        Search User
                      </Link>
                    </div>
                    <div className="menu-row">
                    <Link to="/addons" className="menu-box">
                        Addons
                      </Link>
                      <Link to="/main_courses" className="menu-box">
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
                      <Link to="/add_new_menu"> </Link>
                      <Link to="/admin_menu"> </Link>
                </div>
              </>
            }
          />
          <Route path="/main_menu" element={<MainMenu />} /> 
          <Route path="/addons" element= {< Addons />} />
          <Route path="/main_courses" element= {< MainCourses />} />
          <Route path="/breads" element= {< Breads />} />
          <Route path="/rices" element= {< Rices />} />
          <Route path="/curries"  element= {< Curries />} />
          <Route path="/sweets" element= {< Sweets />} />
          <Route path="/search_user"  element= {< SearchUser />}/>
          <Route path="/add_new_menu" element={< AddNewMenu />} />
          <Route path="/admin_menu" element={< AdminMenu />} />
          
        </Routes>
        < Footer/>
      </BrowserRouter>
      
    </>
  );
};

export default AdminMenu;
