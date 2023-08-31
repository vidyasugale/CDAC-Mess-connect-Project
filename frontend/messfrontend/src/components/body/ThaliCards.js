import Card from "./Card";
import AppContext from "../../configs/AppContext";
import { useContext, useEffect, useState } from "react";
import axiosConfig from "../../configs/axiosConfig";


const ThaliCards = () => {

    const [cardData,setCardData] = useState([])
    // const cardData = [
    //     {
    //         id: 1,
    //         bread: "roti",
    //         rice: "steamed rice",
    //         mainCourse: "butter paneer",
    //         curry: "daal",
    //         sweet: "gulab jamun"
    //     },
    //     {
    //         id: 2,
    //         bread: "chapati",
    //         rice: "fried rice",
    //         mainCourse: "butter chicken",
    //         curry: "tambda rassa",
    //         sweet: "kheer"
    //     },
    //     {
    //         id: 3,
    //         bread: "chapati",
    //         rice: "fried rice",
    //         mainCourse: "butter chicken",
    //         curry: "tambda rassa",
    //         sweet: "kheer"
    //     },
    //     {
    //         id: 4,
    //         bread: "chapati",
    //         rice: "fried rice",
    //         mainCourse: "butter chicken",
    //         curry: "tambda rassa",
    //         sweet: "kheer"
    //     }
    // ]
    // useEffect(() => {
    //     setCardDetails(cardData)
    // }, [])
    // const cardData = useContext(AppContext);

    useEffect(() => {

        const myfunc = async () => {
            try {
                const response = await axiosConfig.get("/home");
                console.log(response);
                setCardData(response.data);
              } catch (error) {
                console.log(error);
              }
        }
        myfunc();
    },[]);

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
            {cardData && cardData.map(data => {
                return (
                    <Card key={data.key} cardData={data} />
                )
            })}
            </div>
        </>
            

        

    )
}
export default ThaliCards;