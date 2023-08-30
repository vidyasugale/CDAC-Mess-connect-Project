import React, { useEffect, useState } from 'react'
import Navbar2 from '../header/Navbar2'
import MenuCard from './MenuCard'
import axiosConfig from '../../configs/axiosConfig'
import Button from '../header/Button'
import { useNavigate } from 'react-router-dom'
import CustomerFooter from '../footer/CustomerFooter'

const CreateOrder = () => {
    const [addOns, setAddOns] = useState(null);
    const [menus, setMenus] = useState(null);
    const [selectedMenuId, setSelectedMenuId] = useState(0);
    const [customerBalance, setCustomerBalance] = useState(0);
    const navigate = useNavigate();
    const data = JSON.parse(sessionStorage.getItem("customerData"));
    useEffect(() => {
        const getCustomerData = async () => {
            console.log(data);
            if (data) {
                const response = await axiosConfig.get(`/user/getuserbalance/${data.id}`);
                console.log(response.data);
                setCustomerBalance(response.data);

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

    const checkCustomerBalance = (price) => {
        if (price < customerBalance) {
            return true;
        }
        console.log(price, customerBalance);
        alert("Insufficient Balance!!!");
        return false;
    }


    const orderSubmit = async (e) => {
        e.preventDefault();

        if (selectedMenuId !== 0) {
            const selectedMenu = menus.find(menu => menu.id === parseInt(selectedMenuId));
            let totalAmount = selectedMenu.price;

            if (selectedAddons !== []) {

                const addOnsIdInt = (selectedAddons.map(str => parseInt(str)));
                addOnsIdInt.map(addOnId => totalAmount += (addOns.find(addOn => addOn.id === addOnId)).price);
                if (checkCustomerBalance(totalAmount)) {
                    try {
                        console.log(addOnsIdInt);
                        console.log(selectedAddons);
                        const response = await axiosConfig.post("/user/order", {
                            "userId": data.id,
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
                if (checkCustomerBalance(totalAmount)) {
                    try {

                        const response = await axiosConfig.post("/user/order", {
                            "userId": data.id,
                            "menuId": selectedMenuId,
                            "addOnsIds": selectedAddons,
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


    const [selectedAddons, setSelectedAddons] = useState([]);


    const handleAddonChange = (event) => {
        const addonId = parseInt(event.target.value);
        const isChecked = event.target.checked;

        setSelectedAddons((prevSelectedAddons) => {
            if (isChecked) {
                console.log(addonId);
                console.log(prevSelectedAddons);
                return [...prevSelectedAddons, addonId];
            } else {
                console.log(prevSelectedAddons);
                return prevSelectedAddons.filter((id) => id !== addonId);
            }
        });

    };

    return (
        <>
            <Navbar2 />
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
                            <>
                                <div className="card mb-3" >
                                    <div className="row g-0">

                                        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                                            <div className="card-body">
                                                <h5 className="card-title">{ }</h5>
                                                <p className="card-text">
                                                    Name:{data.name}<br />
                                                    Price:{data.price}
                                                </p>

                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-4 col-sm-6 col-6 d-flex justify-content-center align-items-center">

                                            <label>
                                                Add addOn {data.id} <input type="checkbox" onChange={handleAddonChange} value={data.id} />
                                            </label>



                                        </div>
                                    </div>
                                </div>
                            </>
                            //<AddOnCard addOn={data} onSelect={handleAddonSelect} setSelectedAddOns={setSelectedAddOns} />
                        );
                    })
                }
            </div>
            <div className='container d-flex justify-content-center align-items-center'>
                <Button id="buton" classname="btn btn-md customBtn" btnText="Order Now" clickType="button" onClick={orderSubmit} />
            </div>

            <CustomerFooter />
        </>
    )
}

export default CreateOrder;
