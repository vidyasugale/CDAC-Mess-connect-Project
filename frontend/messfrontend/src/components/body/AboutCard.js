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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quae sint atque similique sunt maiores cum repellendus odit! Voluptatum ab adipisci facilis amet quasi minima dolorem officia asperiores quaerat libero repellat suscipit labore, magni placeat quis quas quam eos ipsam reiciendis ratione quibusdam voluptate voluptatibus eveniet! eaque cupiditate accusamus!
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