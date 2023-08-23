import Button from "../header/Button";
import Navbar from "../header/Navbar";
import AboutCard from "./AboutCard";
import ThaliCards from "./ThaliCards";

const MainHomepg = () => {
    return (
        <>
            <div className="topHalf">
                <Navbar />
                <div className="container" style={{ textAlign: "end", color: "#d66f10", fontFamily: "satisfy" }}>
                    <h3 style={{marginRight:"10%",fontFamily:"brush-script-std"}}>"Effortless Meal Management" By MessConnect</h3>
                </div>
                <div className="mt-3 d-flex align-items-center flex-wrap">
                    <div className=" col-lg-8 col-md-8 col-12">
                    <img src="../assets/thali.png" alt="" srcset="" className="thaliImg" />
                    </div>
                    
                    <div className="col-lg-4 col-md-4 col-12 justify-content-end">
                        <div style={{fontFamily:"Poppins",margin:"10px"}}>

                        
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quibusdam voluptates magni velit sequi autem dolor consequuntur, placeat error illum aperiam ipsa  <br /><br />
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quibusdam voluptates magni
                       
                        </div>
                        <div className="d-flex justify-content-center m-3">
                            <a href="#menuCards">
                            <Button classname="btn btn-md ps-3 pe-3 me-5 customBtn text-light" btnText="MENU"/>
                            </a>
                            
                            <Button classname="btn btn-md ps-3 pe-3 me-2 customBtn text-light" btnText="REGISTER"/>
                        
                            
                            
                            
                        </div>

                    </div>
                </div>
            </div>

            <AboutCard />
            <div id="menuCards" style={{ textAlign: "center", marginTop: "10px", height:"100px"}}>
                <div className="" style={{ position: "relative" }}>
                    <div className="largeFont zIndBack headingLarge">
                        Today's Menu
                    </div>
                    <div className="smallFont zIndFront headingSmall">
                        Today's Menu
                    </div>
                </div>
            </div>
            <ThaliCards/>


        </>
    );
}

export default MainHomepg;