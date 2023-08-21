import Navbar from "../header/Navbar";
import AboutCard from "./AboutCard";
import ThaliCards from "./ThaliCards";

const MainHomepg = () => {
    return (
        <>
            <div className="topHalf">
                <Navbar />
                <div className="container" style={{ textAlign: "end", color: "#d66f10", fontFamily: "satisfy" }}>
                    <h3 style={{ letterSpacing: "5px" }}>"Effortless Meal Management" By MessConnect</h3>
                </div>
                <div className="d-flex justify-content-center align-items-center flex-wrap">
                    <img src="../assets/thali.png" alt="" srcset="" className="thaliImg col-lg-6 col-12" />
                    <div className="col-lg-3 col-0">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quibusdam voluptates magni velit sequi autem dolor consequuntur, placeat error illum aperiam ipsa commodi voluptatem qui, nesciunt ab consequatur architecto! Officiis!
                    </div>




                </div>
            </div>

            <AboutCard />
            <div style={{ textAlign: "center", marginTop: "10px", height:"100px"}}>
                <div className="" style={{ position: "relative" }}>
                    <div className="largeFont zIndBack headingLarge" style={{ left: "15%" }}>
                        Today's Menu
                    </div>
                    <div className="smallFont zIndFront headingSmall" style={{ left: "15%" }}>
                        Today's Menu
                    </div>
                </div>
            </div>
            <ThaliCards/>


        </>
    );
}

export default MainHomepg;