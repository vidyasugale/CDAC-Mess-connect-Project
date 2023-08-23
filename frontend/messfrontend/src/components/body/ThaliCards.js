
import { useEffect, useState } from "react";
import Card from "./Card";

const ThaliCards = () => {

    const [cardDetails,setCardDetails] = useState(null);

    const cardData = [
        {
            id:1,
            bread:"roti",
            rice:"steamed rice",
            mainCourse:"butter paneer",
            curry: "daal",
            sweet:"gulab jamun"
        },
        {
            id:2,
            bread:"chapati",
            rice:"fried rice",
            mainCourse:"butter chicken",
            curry: "tambda rassa",
            sweet:"kheer"
        }
    ]
    useEffect(()=>{
        setCardDetails(cardData)
    },[])

    return (
        cardDetails && cardDetails.map(data => {
            return(
                <Card key={data.key} cardData={data}/>
            )
        })
    )
}
export default ThaliCards;