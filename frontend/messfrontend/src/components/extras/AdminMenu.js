import "./AdminMenu.css";
import MainCourses from "./MainCourses";
import MainMenu from "./MainMenu";
import Addons from "./Addons";
import Breads from "./Breads";
import Curries from "./Curries";
import Sweets from "./Sweets";
import Rices from "./Rices";
import SearchUser from "./SearchUser";

import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="menu-container">
                  <h2>Admin Menu</h2>

                  <div className="menu-border">
                    <div className="menu-row">
                      <Link to="/mainmenu">
                        <div className="menu-box">Main Menu</div>
                      </Link>
                      <Link to="/searchUser" className="menu-box">
                        Search User
                      </Link>
                    </div>
                    <div className="menu-row">
                      <Link to="/mainCourses" className="menu-box">
                        Main Courses
                      </Link>
                      <Link to="/breads" className="menu-box">
                        Breads
                      </Link>
                      <Link to="/rices" className="menu-box">
                        Rices
                      </Link>
                    </div>
                    <div className="menu-row">
                      <Link to="/curries" className="menu-box">
                        Curries
                      </Link>
                      <Link to="/sweets" className="menu-box">
                        Sweets
                      </Link>
                      <Link to="/addons" className="menu-box">
                        Addons
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            }
          />
          <Route path="/mainmenu" element={<MainMenu />} />
          <Route path="/addons" Component={Addons} />
          <Route path="/mainCourses" Component={MainCourses} />
          <Route path="/breads" Component={Breads} />
          <Route path="/rices" Component={Rices} />
          <Route path="/curries" Component={Curries} />
          <Route path="/sweets" Component={Sweets} />
          <Route path="/searchUser" Component={SearchUser} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AdminMenu;
