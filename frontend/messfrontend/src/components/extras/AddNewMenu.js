import "./AddNewMenu.css";
import { useState } from "react";
import { Link } from 'react-router-dom';

const AddNewMenu = () => {
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
    <div className="mainMenu-component">
      <h2 className="mainMenu-header">Add New Course</h2>
      <div className="container mt-5 p-3 border registerdiv" style={{ width: "60%" }}>
        <form>
          <div lassName="mb3">
        <label htmlFor="mainCourse" className="form-label">Main Course : </label>
        <input
          onChange={(event) => {
            setBread(event.target.value);
          }}
          type="text"
          id="mainCourse" className="form-control"
        ></input>
      </div>

      <div className="mb3">
        <label htmlFor="bread" className="form-label">Bread</label>
        <input
          onChange={(event) => {
            setBread(event.target.value);
          }}
          type="text" id="bread" className="form-control"
        ></input>
      </div>

      <div className="mb3">
        <label htmlFor="curry" className="form-label">Curry</label>
        <input
          onChange={(event) => {
            setCurry(event.target.value);
          }}
          type="text"
          id="curry" className="form-control"
        ></input>
      </div>
      <div className="mb3">
        <label htmlFor="rice" className="form-label">Rice</label>
        <input
          onChange={(event) => {
            setRice(event.target.value);
          }}
          type="text"
          id="rice" className="form-control"
        ></input>
      </div>
      <div className="mb3">
        <label htmlFor="sweet" className="form-label">Sweet</label>
        <input
          onChange={(event) => {
            setSweet(event.target.value);
          }}
          type="text"
          id="sweet" className="form-control"
        ></input>
      </div>
      <div className="mb3">
        <label htmlFor="price" className="form-label">Price</label>
        <input
          onChange={(event) => {
            setPrice(event.target.value);
          }}
          type="number"
          id="price" className="form-control"
        ></input>
      </div>
      <div classname="btn btn-md ps-3 pe-3 me-5 customBtn text-light">
       
        <button onClick={handleNewCourse}> Save </button>
        
       
      </div>
      
      </form>
      </div>
      
    </div>
   
    
  );
};

export default AddNewMenu;
