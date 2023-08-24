import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import AboutCard from "./AboutCard";
import Herosection from "./Herosection";
import ThaliCards from "./ThaliCards";
import Registerpg from "./Registerpg";

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
                    
                    
                </Routes>
            </BrowserRouter>



        </>
    );
}

export default MainHomepg;