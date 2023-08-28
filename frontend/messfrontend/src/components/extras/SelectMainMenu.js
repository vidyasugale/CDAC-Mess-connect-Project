import React, { useState } from "react";
import "./SelectMainMenu.css";
import Button from "../header/Button";
import { Link } from "react-router-dom";
import Navbar2 from '../header/Navbar2'
import Footer from '../footer/Footer'

const SelectMainMenu = () => {
  const course = [
    {
      mainCourse: "dal",
      bread: 'Butter Nan',
      curry : 'Shev Bhaji',
      rice: 'Jeera Rice',
      sweet: 'Laadu',
    },
    {
      mainCourse: "dal",
      bread: 'Butter Nan',
      curry : 'Shev Bhaji',
      rice: 'Jeera Rice',
      sweet: 'Laadu',
    },
    {
      mainCourse: "dal",
      bread: 'Butter Nan',
      curry : 'Shev Bhaji',
      rice: 'Jeera Rice',
      sweet: 'Laadu',
    },
  ];

  return (
    <>
    < Navbar2 homePath="/admin/home" />
    <div className="mainCourse-container">
      <div className="" style={{ position: "relative", height: "5rem" }}>
          <div className="largeFont zIndBack registerHeadOut" style={{ left: "20%" }}>
            Select Main Menu
          </div>
          <div className="smallFont zIndFront registerHeadIn" style={{}}>
            Select Main Menu
          </div>
        </div>
      <div >
        <Link to="/create-new-menu" > 
      <Button classname="btn btn-md customBtn text-light" btnText="Create New Menu" clickType="button" /> 
      </Link>
      <table className="table mt-3 table-responsive table-striped">
        <thead className="mainCourse-header">
        <th >Main Courses </th>
          <th >Bread </th>
          <th >Curry </th>
          <th >Rice </th>
          <th >Sweet </th>
          <th >Select </th>
        
        </thead>
        <tbody className="mainCourse-body">
          {course.map(s =>{
            return <tr>
              <td >{s.mainCourse}</td>
              <td >{s.bread}</td>
            <td >{s.curry}</td>
            <td >{s.rice}</td>
            <td >{s.sweet}</td>
            <td>
              <input type="radio"></input>
            </td>
            </tr>
          })}
        </tbody>
      </table>
      </div> 
     
      <Button classname="btn btn-md customBtn text-light" btnText="Add Today's Menu" clickType="button" />
      <Link to="/admin/home">
      <Button classname="btn btn-md mx-2 customBtn text-light" btnText="Admin Home" clickType="button" />
      </Link>

  </div>
  < Footer />
       </>
  ) 
};

export default SelectMainMenu;
