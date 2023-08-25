import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import AboutCard from "./AboutCard";
import Herosection from "./Herosection";
import ThaliCards from "./ThaliCards";
import Registerpg from "./Registerpg";
import Loginpg from "./Loginpg";
import Contactus from "./Contactus";

const MainHomepg = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Herosection />

                            <AboutCard />


                            <Link to="/Register">
                            <ThaliCards />
                            </Link>
                            
                        </>
                    } />
                    
                    <Route path="/Register" element={<Registerpg />}/>
                    <Route path="/Login" element={<Loginpg/>}/>
                    <Route path="/Contact" element={<Contactus/>}/>
                    
                    
                </Routes>
            </BrowserRouter>



        </>
    );
}

export default MainHomepg;