import "./CreateNewMenu.css";
import { useState } from "react";
import { Link } from 'react-router-dom';
import Button from "../header/Button";
import Navbar2 from '../header/Navbar2'
import Footer from '../footer/Footer'

const CreateNewMenu = () => {
  const [courseList, setCourseList] = useState([]);
  const [MainCourse, setMainCourse] = useState("");
  const [Bread, setBread] = useState("");
  const [Curry, setCurry] = useState("");
  const [Rice, setRice] = useState("");
  const [Sweet, setSweet] = useState("");
  const [Price, setPrice] = useState(0);

  const handleNewCourse = () => {
    const mainMenu = { MainCourse, Bread, Curry, Rice, Sweet, Price };
    setCourseList([...courseList, mainMenu]);
    setMainCourse("");
    setBread("");
    setCurry("");
    setRice("");
    setSweet("");
    setPrice(0);

    console.log("mainCourse :", MainCourse);
    console.log("bread :", Bread);
    console.log("curry :", Curry);
    console.log("rice :", Rice);
    console.log("sweet :", Sweet);
    console.log("price :", Price);
    console.log("Button is clicked");
  };

  return (
    <>
    < Navbar2 />
    <div className="addNewMenu-component">
    <div className="" style={{ position: "relative", height: "5rem" }}>
          <div className="largeFont zIndBack registerHeadOut" style={{ left: "20%" }}>
            Create New Menu
          </div>
          <div className="smallFont zIndFront registerHeadIn" style={{}}>
            Create New Menu
          </div>
        </div>
      <div className="container mt-3  " style={{ width: "60%" }}>
        <form>
        <div className="mb3">
        <label htmlFor="name" className="mt-3 form-label">Name : </label>
        <input required={true} placeholder="Add Name for New Menu"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
          type="text"
          id="name" className="form-control"
        ></input>
      </div>
          <div lassName="mb3">
        <label htmlFor="mainCourse" className="mt-3 form-label">Main Course : </label>
        <select name="mainCourse" 
          onChange={(event) => {
            setMainCourse(event.target.value);
          }} required={true} id="mainCourse" className="form-select">
          <option selected disabled value="">--Select Main Course--</option>
          {courseList.map((course) => (
            <option > {course.MainCourse} </option>
          ))}
        </select>
      </div>
      <div className="mb3">
        <label htmlFor="bread" className="mt-3 form-label">Bread : </label>
        <select name="bread"
          onChange={(event) => {
            setBread(event.target.value);
          }} required={true} id="bread" className="form-select">
          <option selected disabled value="">--Select Bread--</option>
          {courseList.map((course) => (
            <option > {course.Bread} </option>
          ))}
        </select>
      </div>

      <div className="mb3">
        <label htmlFor="curry" className="mt-3 form-label">Curry : </label>
        <select name="curry"
          onChange={(event) => {
            setCurry(event.target.value);
          }} required={true} id="curry" className="form-select">
          <option selected disabled value="">--Select Curry--</option>
          {courseList.map((course) => (
            <option > {course.Curry} </option>
          ))}
        </select>
      </div>
      <div className="mb3">
        <label htmlFor="rice" className="mt-3 form-label">Rice : </label>
        <select name="rice"
          onChange={(event) => {
            setRice(event.target.value);
          }} required={true} id="rice" className="form-select">
          <option selected disabled value="">--Select Rice--</option>
          {courseList.map((course) => (
            <option > {course.Rice} </option>
          ))}
        </select>
      </div>
      <div className="mb3">
        <label htmlFor="sweet" className="mt-3 form-label">Sweet : </label>
        <select name="sweet"
          onChange={(event) => {
            setSweet(event.target.value);
          }} required={true} id="sweet" className="form-select">
          <option selected disabled value="">--Select Sweet--</option>
          {courseList.map((course) => (
            <option > {course.Sweet} </option>
          ))}
        </select>
      </div>
      <div className="mb3">
        <label htmlFor="price" className="mt-3 form-label">Price : </label>
        <input
          onChange={(event) => {
            setPrice(event.target.value);
          }}
          type="number"
          required={true} id="price" className="form-control"
        ></input>
      </div>
      <div >
      <Button classname="btn btn-md mt-3  col-md-3 customBtn text-light" btnText="Create Menu" clickType="button" onClick={handleNewCourse}/>
      <Link to="/select-main-menu">
      <Button classname="btn btn-md mt-3 mx-2 col-md-3  backBtn customBtn text-light" btnText="Back" clickType="button"/>
      </Link>
      </div>
      
      </form>
      </div>
      
    </div>
    < Footer />
       </>
  
  );
};

export default CreateNewMenu;
