import Navbar2 from "../header/Navbar2"
import Footer from "../footer/Footer"
import "../stylesheets/wallet.css"
import { useEffect, useState } from "react"

const Wallet = () => {
    const [customerData,setCustomerData] = useState({});
   
    useEffect(() => {
        const getCustomerData = () => {
            const data = JSON.parse( sessionStorage.getItem("customerData"));
            if(data){
                setCustomerData(data);
                
            }
        }
        getCustomerData();
        
    },[]);
    
    return(
        <>
        <Navbar2 homePath="/customer/home" />

        <div className=" headingBox">
                            <div className="headingLarge largeFont zIndBack">
                                Wallet
                            </div>
                            <div className="headingSmall smallFont zIndFront">
                                Wallet
                            </div>
                        </div>

        <div className="wallet container">
        
            <div className="balanceBox container mt-5">
                <div className="balance">
                    balance
                </div>
                <br/>
                <div className="amount">{customerData.balance}</div>

            </div>
        </div>


        <Footer homePath="/customer/home"/>
        </>

    )
}

export default Wallet;