import CustomerFooter from "../footer/CustomerFooter"
import Navbar2 from "../header/Navbar2"

const CustomerContactUs = () => {
    return (
        <>
            <Navbar2 />
            <div className="container" style={{ height: "20rem" }}>

                <div className="container box box1 zIndBack" style={{ transform: "translateX(12%)", height: "20rem" }}>
                    <div className=" headingBox">
                        <div className="headingLarge largeFont zIndBack" style={{ transform: "translateX(-50%, -50%)" }}>
                            Contact Us
                        </div>
                        <div className="headingSmall smallFont zIndFront">
                            Contact Us
                        </div>
                    </div>
                    <div className="container aboutDetails p-1">
                        <div style={{ marginBottom: "20px", fontSize: "20px" }}>
                            Phone No.:    9881474580
                        </div>
                        <div style={{ fontSize: "20px" }}>
                            Email at :    messconnect@gmail.com
                        </div>
                    </div>

                </div>


            </div>
            <CustomerFooter />
        </>
    )
}

export default CustomerContactUs