import Navbar2 from "../header/Navbar2"
import "../stylesheets/wallet.css"
import { useEffect, useState } from "react"
import axiosConfig from "../../configs/axiosConfig"
import CustomerFooter from "../footer/CustomerFooter"

const Wallet = () => {
    const [customerBalance, setCustomerBalance] = useState(0);

    useEffect(() => {
        const getCustomerData = async () => {
            const data = JSON.parse(sessionStorage.getItem("customerData"));
            if (data) {
                try {
                    const response = await axiosConfig.get(`/user/getuserbalance/${data.id}`);
                    setCustomerBalance(response.data);
                } catch (error) {
                    alert("request error!!");
                    console.log(error);
                }

            }
        }
        getCustomerData();

    }, []);

    return (
        <>
            <Navbar2 />

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
                    <br />
                    <div className="amount">{customerBalance}</div>

                </div>
            </div>


            <CustomerFooter />
        </>

    )
}

export default Wallet;