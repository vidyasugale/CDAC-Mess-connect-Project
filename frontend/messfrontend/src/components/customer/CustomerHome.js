import { Link } from 'react-router-dom';
import Navbar2 from '../header/Navbar2';
import Footer from '../footer/Footer';
import "../stylesheets/customerHome.css";
import ThaliCards from '../body/ThaliCards';
const CustomerHome = () => {
    // const navigate = useNavigate();


    // if(!validUser){
    //     alert("Invalid user!!!");
    //     navigate("/");
    // }
    const customerData = JSON.parse( sessionStorage.getItem("customerData"));
    const logOutUser = () => {
        sessionStorage.removeItem('customerData');
    }
    return (
        <>
            <Navbar2 homePath="/customer/home" profilePath="/customer/edit-profile" userData={customerData} onLogout={logOutUser}/>
            <div style={{fontWeight:"bold", fontSize:"20px"}}>
                Welcome, {customerData.firstName} {customerData.lastName} 
            </div>
            <div className="container d-flex justify-content-center align-items-center flex-wrap mt-3" >
                <Link to="/customer/create-order" style={{textDecoration:"none"}}>
                    <div className='whiteBox'>

                        Make Order
                    </div>
                </Link>

                <Link to="/customer/order-summery" style={{textDecoration:"none"}}>
                <div className='whiteBox' >
                    Order Summery
                </div>
                </Link>
                <Link to="/customer/wallet" style={{textDecoration:"none"}}>
                <div className='whiteBox' >
                    Wallet
                </div>
                </Link>



            </div>
            <Link to="/customer/create-order">
                <ThaliCards/>
            </Link>
            

            <Footer homePath="/customer/home"/>
        </>
    )
}

export default CustomerHome;