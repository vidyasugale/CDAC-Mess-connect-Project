import "./Addons.css";
import { useState, useEffect } from "react";
import Button from '../header/Button';
import React, { useRef } from 'react';
import Navbar2 from '../header/Navbar2'
import Footer from '../footer/Footer'
import axiosConfig from "../../configs/axiosConfig";
import { useNavigate } from "react-router-dom";

const Addons = () => {
  const images = [
    "../assets/curd.png",
    "../assets/flakes.png" ,
    "../assets/fruit_salad.png",
    "../assets/pakora.png",
    "../assets/papad.png",
    "../assets/pickle.png",
    "../assets/salad.png",
  ];

  const [addonsList, setAddonsList] = useState([]);
  const [imageIndex, setImageIndex] = useState([]);
  const [addonName, setAddonName] = useState("");
  const [addonPrice, setAddonPrice] = useState("");
  const [addonId, setAddonId] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const getAllAddons = async () => {
      try {
        const response = await axiosConfig.get("/admin/getalladdons");
        setAddonsList(response.data);
      } catch (error) {
        console.log(error)
      }
    }
    getAllAddons();
  },[]);

  const addNewAddons = async (e) => {
    try {
      const response = await axiosConfig.post("/admin/addnewaddon",{
        name:addonName,
        price:addonPrice
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
}

  const inputRef = useRef(null);

  const handleButtonClick = () => {
    inputRef.current.focus();
  };



  const [selectedAddons, setSelectedAddons] = useState([]);
  const navigate = useNavigate();





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


  const submitSelectedAddons = async (e) => {
    e.preventDefault();
    const selectedAddOnIds = selectedAddons.map(id => parseInt(id));
    console.log(selectedAddOnIds);
    const response = await axiosConfig.put("/admin/activateAddon",{
      activeAddons:selectedAddOnIds
    })
    console.log(response);
  }
  return (
    <>
    < Navbar2 homePath="/admin/home" />
    <div className="mt-3 d-flex align-items-center flex-wrap">
    <div className=" col-lg-5 col-md-5 col-12">
      <img className="curry-Img"
      src={images[imageIndex]}
      alt={`Image ${imageIndex + 1}`}
    />
       </div>
    <div className="col-lg-7 col-md-6 col-12 justify-content-end">
    <div className="addon-component">
    <div style={{ textAlign: "center", marginTop: "10px", height: "100px" }}>
          <div className="mt-1" style={{ position: "relative" }}>
            <div className="largeFont zIndBack headingLarge">
              Add On's
            </div>
            <div className="smallFont zIndFront headingSmall">
              Add On's
            </div>
          </div>
        </div>
      <div >
      <Button  classname="btn btn-md ps-3 pe-3 mt-1 me-5 customBtn text-light" btnText="Create New Add On" clickType="Button" onClick={handleButtonClick} />

        <table className="table mt-3 table-head" >
          <thead  >
            <tr>
              <th >Name </th>
              <th > Price </th>
              <th > Select </th>
            </tr>
          </thead>
          <tbody>
            {addonsList && addonsList.map(data => (
              <tr key={data.id}>
                <td >{data.name}</td>
                <td >{data.price}</td>
                <td>
              <input type="checkbox" value={data.id} onChange={handleAddonChange}></input>
            </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button classname="btn btn-md ps-3 pe-3 mt-1 me-5 customBtn text-light" btnText="Add to Today's Add On" clickType="Button"  onClick={submitSelectedAddons}/>
        
        </div>
      <div className="mt-5">
      <div style={{ textAlign: "center", marginTop: "10px", height: "100px" }}>
          <div className="mt-1" style={{ position: "relative" }}>
            <div className="largeFont zIndBack headingLarge">
              Create Add On's
            </div>
            <div className="smallFont zIndFront headingSmall">
              Create Add On's
            </div>
          </div>
        </div>
        <form >
          <label className="form-label mt-3">
            AddOn Name :
            <input
              type="text" ref={inputRef}
              value={addonName} className="form-control" required={true}
              onChange={(event) => setAddonName(event.target.value)}
            />
          </label> <br></br>
          <label className="form-label mt-3">
            AddOn Price :
            <input
              type="number"
              value={addonPrice} className="form-control" required={true}
              onChange={(event) => setAddonPrice(event.target.value)}
            />
          </label>
          <div>
          <Button classname="btn btn-md ps-3 pe-3 mt-1 me-5 customBtn text-light" btnText="Create Add On" clickType="Submit" onClick={addNewAddons} />
          </div>
        </form>
        
        </div>
      </div>
      </div>
      </div>
      < Footer />
       </>
  )
};

export default Addons;
