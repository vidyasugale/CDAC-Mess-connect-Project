import { useLocation, useNavigate } from 'react-router-dom';
import Navbar2 from '../header/Navbar2';
import Footer from '../footer/Footer';
import "../stylesheets/customerHome.css"
const CustomerHome = () => {
    const location = useLocation();
    const navigate = useNavigate();
    if(location.state === null){
        
        alert("Invalid user!!!");
        navigate("/");
    }
    const customerData = location.state && location.state.data;
    
    return(
        <>
        <Navbar2 userData={customerData}/>
        <div>
            Welcome, {customerData.firstName} {customerData.lastName}
        </div>
        <div className="container d-flex align-items-center flex-wrap mt-3" >
                <div className='whiteBox'>
                    Menu
                </div>
                <div className='whiteBox'>
                    Summery
                </div>
                <div className='whiteBox'>
                    Wallet
                </div>
                <div className='whiteBox'>
                    Edit Profile
                </div>
                <div className='whiteBox'>
                    Menu
                </div>
                <div className='whiteBox'>
                    Menu
                </div>
        </div>

        <Footer/>
        </>
    )
}

export default CustomerHome;