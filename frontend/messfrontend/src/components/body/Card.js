import { Link } from "react-router-dom";
import "../stylesheets/menucard.css";
const Card = ({ cardData }) => {
    
    return (
        <>
            <Link to="/login">
            <div className="myCard" style={{ width: "12rem" }}>
                <img src="../assets/thali.png" className="cardImg" alt="..." />
                <div className="p-1" style={{textAlign:"center"}}>
                    <h6>{cardData.name}</h6>
                    <p style={{ color: "black" }}>Experience a culinary delight today with our {cardData.mainCourse.name} featuring {cardData.rice.name}, {cardData.curry.name}, and {cardData.bread.name}. Don't forget to treat yourself to the irresistible {cardData.sweet.name} for a perfect finish!</p>
                </div>
            </div>
            </Link>
            
        </>
    )
}
export default Card;

