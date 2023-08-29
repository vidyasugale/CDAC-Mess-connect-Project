import React, { useEffect, useState } from 'react'
import Navbar2 from '../header/Navbar2'
import Footer from '../footer/Footer'
import MenuCard from './MenuCard'
import axiosConfig from '../../configs/axiosConfig'
import AddOnCard from './AddOnCard'
import Button from '../header/Button'
import { useNavigate } from 'react-router-dom'

const CreateOrder = () => {
    const [addOns, setAddOns] = useState(null);
    const [menus, setMenus] = useState(null);
    const [selectedMenuId, setSelectedMenuId] = useState(0);
    const [selectedAddOns, setSelectedAddOns] = useState([]);
    const [customerData, setCustomerData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const getCustomerData = () => {
            const data = JSON.parse(sessionStorage.getItem("customerData"));
            if (data) {
                setCustomerData(data);

            }
        }
        getCustomerData();

    }, []);

    useEffect(() => {
        const getAllData = async () => {
            const response = await axiosConfig.get("/todaysmenu");
            setAddOns(response.data.addons);
            setMenus(response.data.menu);
        }
        getAllData();
    }, []);

    const handleMenuSelect = (menuId) => {
        setSelectedMenuId(menuId);
    };

    const handleAddonSelect = (selectedAddons) => {
        console.log(selectedAddons);

        setSelectedAddOns([...selectedAddOns, selectedAddons[0]]);


        console.log(selectedAddOns);
    };
    const checkCustomerBalance = (balance) => {
        if(balance > customerData.balance){
            return true;
        }
        alert("Insufficient Balance!!!");
        return false;
    }


    const orderSubmit = async (e) => {
        e.preventDefault();

        if (selectedMenuId !== 0) {
            const selectedMenu = menus.find(menu => menu.id === parseInt(selectedMenuId));
            let totalAmount = selectedMenu.price;

            if (selectedAddOns !== []) {

                const addOnsIdInt = (selectedAddOns.map(str => parseInt(str)));
                addOnsIdInt.map(addOnId => totalAmount += (addOns.find(addOn => addOn.id === addOnId)).price);
                if(checkCustomerBalance(totalAmount)){
                    try {
                        const response = await axiosConfig.post("/user/order", {
                            "userId": customerData.id,
                            "menuId": selectedMenuId,
                            "addOnsIds": addOnsIdInt,
                            "totalAmount": totalAmount
                        })
                        console.log(response);
                        navigate("/customer/home");
                    } catch (error) {
                        alert("Invalid Submittion!!!");
                    }
                }


            } else {
                if(checkCustomerBalance(totalAmount)){
                    try {
                        const response = await axiosConfig.post("/user/order", {
                            "userId": customerData.id,
                            "menuId": selectedMenuId,
                            "addOnsIds": selectedAddOns,
                            "totalAmount": totalAmount
                        })
                        console.log(response);
                        navigate("/customer/home");
                    } catch (error) {
                        alert("Invalid Submittion!!!");
                    }
                }
                  

            }
        } else {
            alert("Please select 1 menu!!!");
        }
    }

    return (
        <>
            <Navbar2 homePath="/customer/home" />
            <div id="menuCards" style={{ textAlign: "center", marginTop: "10px", height: "100px" }}>
                <div className="mt-1" style={{ position: "relative" }}>
                    <div className="largeFont zIndBack headingLarge">
                        Select Menu
                    </div>
                    <div className="smallFont zIndFront headingSmall">
                        Select Menu
                    </div>
                </div>
            </div>
            <div className='container'>
                {
                    menus && menus.map(data => {
                        return (
                            <MenuCard menu={data} onSelect={handleMenuSelect} />
                        );
                    })
                }

            </div>
            <div id="menuCards" style={{ textAlign: "center", marginTop: "10px", height: "100px" }}>
                <div className="mt-1" style={{ position: "relative" }}>
                    <div className="largeFont zIndBack headingLarge">
                        Select AddOns
                    </div>
                    <div className="smallFont zIndFront headingSmall">
                        Select AddOns
                    </div>
                </div>
            </div>
            <div className="container">
                {
                    addOns && addOns.map(data => {
                        return (
                            <AddOnCard addOn={data} onSelect={handleAddonSelect} setSelectedAddOns={setSelectedAddOns} />
                        );
                    })
                }
            </div>
            <div className='container d-flex justify-content-center align-items-center'>
                <Button id="buton" classname="btn btn-md customBtn" btnText="Order Now" clickType="button" onClick={orderSubmit} />
            </div>

            <Footer homePath="/customer/home" />
        </>
    )
}

export default CreateOrder;
