
import Button from "../header/Button";
import Navbar from "../header/Navbar";
import "../stylesheets/herosection.css";

const Herosection = () => {





    return (
        <>

                    
            <Navbar />
            <div className="container headline" style={{}}>
                <h3 style={{}}>"Effortless Meal Management" By MessConnect</h3>
            </div>
            <div className="mt-3 d-flex align-items-center flex-wrap">
                <div className=" col-lg-7 col-md-7 col-12">
                    <img src="../assets/thali_splash.png" alt="" srcSet="" className="thaliImg" />
                </div>

                <div className="col-lg-5 col-md-5 col-12 justify-content-end">
                    <div style={{ margin: "10px" }}>


                        Tired of long lines and uncertainty when it comes to your daily meals? <br></br>
                        Look no further! <br></br> <br></br>
                        Introducing Mess Connect, We are here to streamline your meal management experience. <br></br> Say goodbye to the hassle of waiting with Mess Connect, you can effortlessly pre-book your lunches and dinners, ensuring a delicious and satisfying meal exactly when you want it. <br></br>
                        Our user-friendly interface makes it a breeze to customize your menu, accommodate dietary preferences, and secure your spot at the table. <br></br>
                        <br></br>Join us in simplifying your culinary journey reister for Mess Connect today and take control of your dining destiny!<br></br>

                    </div>
                    <div className="d-flex justify-content-center m-3">
                        <a href="#menuCards">
                            <Button classname="btn btn-md ps-5 pe-5 me-5 customBtn text-light" btnText="MENU" />
                        </a>

                        {/* <Button classname="btn btn-md ps-3 pe-3 me-2 customBtn text-light" btnText="REGISTER" /> */}
                    </div>

                </div>
            </div>

        </>
    )
}
export default Herosection;