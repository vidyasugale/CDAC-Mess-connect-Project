import React, { useEffect, useState } from 'react'
import Navbar2 from '../header/Navbar2'
import Footer from '../footer/Footer'
import MenuCard from './MenuCard'
import axiosConfig from '../../configs/axiosConfig'
import AddOnCard from './AddOnCard'
import Button from '../header/Button'
import Addons from './../extras/Addons';

const CreateOrder = () => {
    const[addOns,setAddOns]=useState(null);
    const[menus,setMenus]=useState(null);
    const[selectedMenuId,setSelectedMenuId] = useState(0);
    const [selectedAddOns, setSelectedAddOns] = useState([]);
    const [addOnIds,setAddOnIds] = useState([]);
    const [order,setOrder] = useState({});
    const [customerData,setCustomerData] = useState({});
   
    useEffect(() => {
        const getCustomerData = () => {
            const data = JSON.parse( sessionStorage.getItem("customerData"));
            if(data){
                setCustomerData(data);
                
            }
        }
        getCustomerData();
        
    },[]);

    useEffect(()=> {
        const getAllData = async () => {
            const response = await axiosConfig.get("/todaysmenu");
            setAddOns(response.data.addons);
            setMenus(response.data.menu);
        }
        getAllData();
    },[]);

    const handleMenuSelect = (menuId) => {
        setSelectedMenuId(menuId);
      };
    
      const handleAddonSelect = (selectedAddons) => {
        setSelectedAddOns(selectedAddons);
      };

      console.log(selectedMenuId);
      console.log(selectedAddOns);

    const orderSubmit = async () => {
        if(selectedMenuId !== 0){
            const data = JSON.parse( sessionStorage.getItem("customerData"));
            const selectedMenu = menus.find(menu => menu.id === parseInt(selectedMenuId));
            let totalAmount=selectedMenu.price;
            
            if(selectedAddOns !== []){
                console.log(selectedAddOns);
                setAddOnIds(selectedAddOns.map(str => parseInt(str)));
                // console.log(addOns);    
                // console.log(addOnIds);
                const add = addOns.find(addon => addon.id === addOnIds[0]);
                // console.log(add);
                addOnIds.map(addOnId => totalAmount += (addOns.find(addOn => addOn.id === addOnId)).price);
                // console.log(addOnIds);
                // console.log(totalAmount);
            }
            // console.log(data.id);
            // console.log(selectedMenuId);
            // console.log(addOnIds);
            // console.log(totalAmount);
            // setOrder({
            //     "userId": data.id,
            //     "menuId": selectedMenuId,
            //     "addOnsIds": ,
            //     "totalAmount": totalAmount
            // })
            // console.log(order);
            const response = await axiosConfig.post("/user/order",order)
            console.log(response);
        }else{
            alert("Please select 1 menu!!!");
        }
    }

  return (
        <>
            <Navbar2 homePath="/customer/home"/>
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
                    menus && menus.map(data=>{
                        return(
                            <MenuCard menu={data} onSelect={handleMenuSelect}/>   
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
                        return(
                            <AddOnCard addOn={data} onSelect={handleAddonSelect}/>
                        );
                    })
                }
            </div>
            <div className='container d-flex justify-content-center align-items-center'>
            <Button classname="btn btn-md customBtn" btnText="Order Now" clickType="button" onClick={orderSubmit}/>
            </div>
            
            <Footer homePath="/customer/home"/>
        </>
  )
}

export default CreateOrder;
