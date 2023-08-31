import "../stylesheets/aboutcard.css"
const AboutCard = () => {
    return (
        <>
            <div>
                <div className="Main mt-5">
                    <div className="container box box1 zIndBack">
                        <div className=" headingBox">
                            <div className="headingLarge largeFont zIndBack">
                                About
                            </div>
                            <div className="headingSmall smallFont zIndFront">
                                About us
                            </div>
                        </div>
                        <div className="container aboutDetails p-1">
                        "Mess Connect" is designed to revolutionize the traditional campus dining experience by integrating smart technology, user centric design, and efficient management. This innovative platform provides a one-stop solution to manage meals, modifications, and payments, all through a user-friendly web interface. From the outset, the project envisions a seamless and convenient experience for all stakeholders, including students, mess administrators, and kitchen staff.
                        </div>

                    </div>
                    <div className="container box box2 zIndFront d-flex justify-content-center" >
                    <img className="" style={{ width: "8vw"}} src="../assets/newlogo.svg" alt="logo" srcset="" />
                    </div>
                </div>
            </div>

        </>
    )
}
export default AboutCard;