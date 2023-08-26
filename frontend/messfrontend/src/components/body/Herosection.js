import axiosConfig from "../../configs/axiosConfig";
import Button from "../header/Button";
import Navbar from "../header/Navbar";
import "../stylesheets/herosection.css";
import { useEffect } from "react";
const Herosection =  () => {



    useEffect(() => {
        const myfunc = async () => {
            try {
                const response = await axiosConfig.get("/home");
                console.log(response.data);
              } catch (error) {
                console.log(error);
              }
        }
        myfunc();
    },[]);

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


                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quibusdam voluptates magni velit sequi autem dolor consequuntur, placeat error illum aperiam ipsa  <br /><br />
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quibusdam voluptates magni

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