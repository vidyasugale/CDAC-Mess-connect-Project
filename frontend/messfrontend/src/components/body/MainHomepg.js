import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Herosection from "./Herosection";
import ThaliCards from "./ThaliCards";
import Registerpg from "./Registerpg";
import Loginpg from "./Loginpg";
import ContactUs from "./Contactus";
import Footer from './../footer/Footer';
import AboutUs from "./AboutUs";
import AdminAboutUs from "../extras/AdminAboutUs";
import AdminContactUs from "../extras/AdminContactUs";
import CustomerHome from "../customer/CustomerHome";
import AdminHome from "../extras/AdminHome";
import SelectMainMenu from './../extras/SelectMainMenu';
import Addons from './../extras/Addons';
import MainCourses from './../extras/MainCourses';
import Breads from './../extras/Breads';
import Rices from './../extras/Rices';
import Curries from './../extras/Curries';
import Sweets from './../extras/Sweets';
import SearchUser from './../extras/SearchUser';
import CreateNewMenu from './../extras/CreateNewMenu';
import Wallet from './../customerWallet/Wallet';
import Orders from './../CustomerOrders/Orders';
import CreateOrder from "../customer/CreateOrder";
import EditProfile from "../customer/EditProfile";
import EditProfile2 from "../extras/EditProfile";
import CustomerAboutUs from './../customer/CustomerAboutUs';
import CustomerContactUs from './../customer/CustomerContactUs';


const MainHomepg = () => {


    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Herosection />
                            <Link to="/login">
                                <ThaliCards />
                            </Link>

                            <Footer />
                        </>
                    } />

                    <Route path="/register" element={<Registerpg />} />
                    <Route path="/login" element={<Loginpg />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/about" element={<AboutUs />} />


                    <Route path="/customer/home" element={<CustomerHome />} />
                    <Route path="customer/wallet" element={<Wallet />} />
                    <Route path="/customer/order-summery" element={<Orders />} />
                    <Route path="/customer/create-order" element={<CreateOrder />} />
                    <Route path="/customer/edit-profile" element={<EditProfile />} />
                    <Route path="/customer/about" element={<CustomerAboutUs />} />
                    <Route path="/customer/contact" element={<CustomerContactUs />} />


                    <Route path="/admin/home" element={<AdminHome />} />
                    <Route path="/admin/edit-profile" element={<EditProfile2 />} />
                    <Route path="/admin/about" element={<AdminAboutUs />} />
                    <Route path="/admin/contact" element={<AdminContactUs />} />


                    <Route path="/select-main-menu" element={<SelectMainMenu />} />
                    <Route path="/addons" element={< Addons />} />
                    <Route path="/main-courses" element={< MainCourses />} />
                    <Route path="/breads" element={< Breads />} />
                    <Route path="/rices" element={< Rices />} />
                    <Route path="/curries" element={< Curries />} />
                    <Route path="/sweets" element={< Sweets />} />
                    <Route path="/search-user" element={< SearchUser />} />
                    <Route path="/create-new-menu" element={< CreateNewMenu />} />
                    {/* <Route path="/admin-menu" element={< AdminHome />} /> */}




                </Routes>
            </BrowserRouter>



        </>
    );
}

export default MainHomepg;