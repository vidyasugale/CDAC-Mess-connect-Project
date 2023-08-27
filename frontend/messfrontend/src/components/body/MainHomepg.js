import { BrowserRouter, Route, Routes } from "react-router-dom";
import Herosection from "./Herosection";
import ThaliCards from "./ThaliCards";
import Registerpg from "./Registerpg";
import Loginpg from "./Loginpg";
import ContactUs from "./ContactUs";
import Footer from './../footer/Footer';
import AboutUs from "./AboutUs";
import CustomerHome from "../customer/CustomerHome";
import { useState } from "react";
import AdminMenu from "../extras/AdminMenu";
import MainMenu from './../extras/MainMenu';
import Addons from './../extras/Addons';
import MainCourses from './../extras/MainCourses';
import Breads from './../extras/Breads';
import Rices from './../extras/Rices';
import Curries from './../extras/Curries';
import Sweets from './../extras/Sweets';
import SearchUser from './../extras/SearchUser';
import AddNewMenu from './../extras/AddNewMenu';


const MainHomepg = () => {
    const [validUser,setValidUser] = useState(false);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Herosection />
                            <ThaliCards />
                            <Footer/>
                        </>
                    } />
                    
                    <Route path="/register" element={<Registerpg />}/>
                    <Route path="/login" element={<Loginpg setValidUser={setValidUser}/>}/>
                    <Route path="/contact" element={<ContactUs/>}/>
                    <Route path="/about" element={<AboutUs/>} />

                    
                    <Route path="/customer/home" element={<CustomerHome validUser={validUser}/>}/>

                    <Route path="/admin/home" element={<AdminMenu/>}/>

                    <Route path="/main-menu" element={<MainMenu />} /> 
          <Route path="/addons" element= {< Addons />} />
          <Route path="/main-courses" element= {< MainCourses />} />
          <Route path="/breads" element= {< Breads />} />
          <Route path="/rices" element= {< Rices />} />
          <Route path="/curries"  element= {< Curries />} />
          <Route path="/sweets" element= {< Sweets />} />
          <Route path="/search-user"  element= {< SearchUser />}/>
          <Route path="/add-new-menu" element={< AddNewMenu />} />
          <Route path="/admin-menu" element={< AdminMenu />} />

                        
                    
                    
                </Routes>
            </BrowserRouter>



        </>
    );
}

export default MainHomepg;