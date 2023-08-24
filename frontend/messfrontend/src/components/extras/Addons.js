import Navbar from "../header/Navbar";


const Addons =() => {
    return(
        <>
        <Navbar/>
        <div style ={{textAlign: "center",marginTop:"10px",height:"100px"}}>
            <div className="" style={{position: "relative"}}>
                <div className="largeFont zIndBack headingLarge" style={{ left:"15%"}}>
                   Special Add-ons

                </div>
             <div className="smallFont zIndFront headingSmall" style={{ left: "15%"}} >
             Special Add-ons
             </div>
             
            </div>


        </div>
        </>
    )
}

export default Addons;