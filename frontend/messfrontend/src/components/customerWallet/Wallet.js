import Navbar2 from "../header/Navbar2"
import Footer from "../footer/Footer"
import "../stylesheets/wallet.css"

const Wallet = () => {
    return(
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
                <br/>
                <div className="amount">550.00</div>

            </div>
        </div>


        <Footer />
        </>

    )
}

export default Wallet;