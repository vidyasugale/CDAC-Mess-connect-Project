import Navbar2 from "../header/Navbar2";
import Footer from "../footer/Footer";
import AboutCard from "../body/AboutCard";

const AdminAboutUs = () => {
    return(
        <>
        <Navbar2 homePath="/admin/home"/>
        <br/>
        <AboutCard />
        <Footer />
        </>
    )

}

export default AdminAboutUs