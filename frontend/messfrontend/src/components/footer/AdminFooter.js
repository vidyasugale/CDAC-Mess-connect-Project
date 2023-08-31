import { Link } from "react-router-dom";
import "../stylesheets/footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer container d-flex mt-5">
        <div className="col-lg-4 col-md-4 col-sm-4 col-4 justify-content-start">
          <img style={{ width: "10vw", alignSelf: "left" }} src="../assets/newlogo.svg" alt="logo" srcSet="" />
        </div>

        <div className="social-links col-lg-4 col-md-4 col-sm-4 col-4 justify-content-center">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link " href="instagram.com"><i className="fab fa-instagram" style={{ color: "#e26d00" }} ></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="twitter.com"><i className="fab fa-twitter" style={{ color: "#e26d00" }}></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="facebook.com"><i className="fa-brands fa-square-facebook" style={{ color: "#e26d00" }}></i></a>
            </li>
          </ul>
        </div>

        <div className=" col-lg-4 col-md-4 col-sm-4 col-4">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/admin/home" style={{ textDecoration: "none" }}>
                <span className="nav-link footerNav">
                  HOME
                </span>
              </Link>

            </li>
            <li className="nav-item">
              <Link to="/admin/about" style={{ textDecoration: "none" }}>
                <span className="nav-link footerNav">
                  ABOUT US
                </span>

              </Link>

            </li>
            <li className="nav-item">
              <Link to="/admin/contact" style={{ textDecoration: "none" }}>

                <span className="nav-link footerNav">
                  CONTACT US
                </span>

              </Link>

            </li>
          </ul>
        </div>

      </div>
    </>


  )
}

export default Footer;