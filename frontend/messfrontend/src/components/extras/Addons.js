import "./Addons.css";
import { useState, useEffect } from "react";
import Button from '../header/Button';
import React, { useRef } from 'react';
import Navbar2 from '../header/Navbar2'
import Footer from '../footer/Footer'

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
  const [addonName, setAddonName] = useState("");
  const [addonPrice, setAddonPrice] = useState("");
  const [addonId, setAddonId] = useState("");
  const [imageIndex, setImageIndex] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleAddons = () =>{
    const newAddons={addonName, addonPrice, addonId};
    setAddonsList([...addonsList, newAddons]);
    setAddonName('');
    setAddonPrice('');
    setAddonId(null);

    console.log("Name :", addonName);
    console.log("Price :", addonPrice);
  }

  const inputRef = useRef(null);

  const handleButtonClick = () => {
    inputRef.current.focus();
  };

  return (
    <>
    < Navbar2 />
    <div className="mt-3 d-flex align-items-center flex-wrap">
    <div className=" col-lg-5 col-md-5 col-12">
      <div className="curry-Img">
      <img
      src={images[imageIndex]}
      alt={`Image ${imageIndex + 1}`}
    />
      </div>
       </div>
    <div className="col-lg-7 col-md-6 col-12 justify-content-end">
    <div className="addon-component">
    <div className="" style={{ position: "relative", height: "5rem" }}>
        <div className="largeFont zIndBack registerHeadOut" style={{ left: "20%" }}>
          Add On's
        </div>
        <div className="smallFont zIndFront registerHeadIn" style={{}}>
          Add On's
        </div>
      </div>
      <div >
        <table className="table table-head" >
          <thead  >
            <tr>
              <th >Name </th>
              <th > Price </th>
              <th > Select </th>
            </tr>
          </thead>
          <tbody>
            {addonsList.map((addon, index) => (
              <tr key={index}>
                <td >{addon}</td>
                <td>
              <input id=" " type="radio"></input>
            </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button classname="btn btn-md ps-3 pe-3 mt-1 me-5 customBtn text-light" btnText="Add to Today's Add On" clickType="Button" onClick={handleAddons} />
        <Button  classname="btn btn-md ps-3 pe-3 mt-1 me-5 customBtn text-light" btnText="Create New Add On" clickType="Button" onClick={handleButtonClick} />
        
        </div>
      <div className="mt-5">
      <div className="" style={{ position: "relative", height: "5rem" }}>
        <div className="largeFont zIndBack registerHeadOut" style={{ left: "20%" }}>
          Create Add On's
        </div>
        <div className="smallFont zIndFront registerHeadIn" style={{}}>
          Create Add On's
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
          <Button classname="btn btn-md ps-3 pe-3 mt-1 me-5 customBtn text-light" btnText="Create Add On" clickType="Submit" onClick={handleAddons} />
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
