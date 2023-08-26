import { Link } from "react-router-dom";
import "../stylesheets/menucard.css";
const Card = ({ cardData }) => {

    return (
        <>
            <Link to="/login">
            <div className="myCard" style={{ width: "12rem" }}>
                <img src="../assets/thali.png" className="cardImg" alt="..." />
                <div className="p-1">
                    <p style={{ color: "black" }}>We are serving today {cardData.rice} with {cardData.curry} having {cardData.mainCourse} and {cardData.bread} as bread.<br /> Sweet Dish: {cardData.sweet}</p>
                </div>
            </div>
            </Link>
            
        </>
    )
}
export default Card;