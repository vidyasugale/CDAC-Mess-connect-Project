import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Herosection from "./Herosection";
import ThaliCards from "./ThaliCards";
import Registerpg from "./Registerpg";
import Loginpg from "./Loginpg";
import ContactUs from "./ContactUs";
import Footer from './../footer/Footer';
import AboutUs from "./AboutUs";

const MainHomepg = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Herosection />

                            


                            <Link to="/Login">
                            <ThaliCards />
                            </Link>
                            <Footer/>
                        </>
                    } />
                    
                    <Route path="/Register" element={<Registerpg />}/>
                    <Route path="/Login" element={<Loginpg/>}/>
                    <Route path="/Contact" element={<ContactUs/>}/>
                    <Route path="/About" element={<AboutUs/>} />
                    
                    
                </Routes>
            </BrowserRouter>



        </>
    );
}

export default MainHomepg;