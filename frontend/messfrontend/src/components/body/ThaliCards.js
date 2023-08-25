
import { useEffect, useState } from "react";
import Card from "./Card";

const ThaliCards = () => {

    const [cardDetails, setCardDetails] = useState(null);

    const cardData = [
        {
            id: 1,
            bread: "roti",
            rice: "steamed rice",
            mainCourse: "butter paneer",
            curry: "daal",
            sweet: "gulab jamun"
        },
        {
            id: 2,
            bread: "chapati",
            rice: "fried rice",
            mainCourse: "butter chicken",
            curry: "tambda rassa",
            sweet: "kheer"
        },
        {
            id: 3,
            bread: "chapati",
            rice: "fried rice",
            mainCourse: "butter chicken",
            curry: "tambda rassa",
            sweet: "kheer"
        },
        {
            id: 4,
            bread: "chapati",
            rice: "fried rice",
            mainCourse: "butter chicken",
            curry: "tambda rassa",
            sweet: "kheer"
        }
    ]
    useEffect(() => {
        setCardDetails(cardData)
    }, [])

    return (
        <>
            <div id="menuCards" style={{ textAlign: "center", marginTop: "10px", height: "100px" }}>
                <div className="mt-5" style={{ position: "relative" }}>
                    <div className="largeFont zIndBack headingLarge">
                        Today's Menu
                    </div>
                    <div className="smallFont zIndFront headingSmall">
                        Today's Menu
                    </div>
                </div>
            </div>
            <div className="container">
            {cardDetails && cardDetails.map(data => {
                return (
                    <Card key={data.key} cardData={data} />
                )
            })}
            </div>

        </>

    )
}
export default ThaliCards;