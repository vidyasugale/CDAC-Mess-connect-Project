const Card = ({cardData}) => {
    
    return (
        <>
            <div className="myCard" style={{width:"18rem"}}>
                <img src="../assets/thali.png" className="cardImg" alt="..." />
                <div className="p-1">
                    <p className="">We are serving today {cardData.rice} with {cardData.curry} having {cardData.mainCourse} and {cardData.bread} as bread.<br/> Sweet Dish: {cardData.sweet}</p>
                </div>
            </div>
        </>
    )
}
export default Card;