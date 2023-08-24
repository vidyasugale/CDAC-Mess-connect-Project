import Navbar from "../header/Navbar"

const Contactus = () => {
    
    return (
        <div className="topHalf">
            <Navbar />
            <div style={{ textAlign: "center", marginTop: "10px", height: "100px" }}>
                <div style={{ position: "relative" }}>
                    <div className="largeFont zIndBack headingLarge" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)"}}>
                        Contact Us
                    </div>
                    <div className="smallFont zIndFront headingSmall" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" , fontWeight:"bold" }}>
                        Contact Us
                    </div>
                
                </div>
            </div>
            <div style={{textAlign: "center" }}>
                    <div style={{marginBottom:"20px", fontSize:"20px"}}>
                        Phone No.:    9881474580
                    </div>
                    <div style={{ fontSize:"20px"}}>
                        Email at :    mymess2023@gmail.com 
                    </div>

                    </div>
        </div>
    );
}

export default Contactus;
