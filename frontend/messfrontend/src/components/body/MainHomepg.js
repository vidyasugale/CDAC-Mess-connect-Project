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

                        
                    
                    
                </Routes>
            </BrowserRouter>



        </>
    );
}

export default MainHomepg;