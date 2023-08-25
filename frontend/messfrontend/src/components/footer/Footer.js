const Footer = () => {
  return (
    <>
      <div className="footer container d-flex mt-5">
        <div className="col-lg-4 col-md-4 col-sm-4 col-4 justify-content-start">
          <img style={{ width: "10vw", alignSelf: "left" }} src="../assets/newlogo.svg" alt="logo" srcset="" />
        </div>

       <div className="social-links col-lg-4 col-md-4 col-sm-4 col-4 justify-content-center">
        <ul className="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link " href="#"><i className="fab fa-instagram" style={{ color: "#e26d00" }} ></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i className="fab fa-twitter" style={{ color: "#e26d00" }}></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fa-brands fa-square-facebook" style={{ color: "#e26d00" }}></i></a>
          </li>
        </ul>
        </div>

<div className="footer-nav col-lg-4 col-md-4 col-sm-4 col-4">
        <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link" href="#">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">ABOUT US</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">CONTACT US</a>
        </li>
        </ul>
        </div>

      </div>
    </>


  )
}

export default Footer;