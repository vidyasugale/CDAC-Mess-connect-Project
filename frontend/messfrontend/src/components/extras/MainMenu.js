import React, { useState } from "react";
import "./MainMenu.css";

const MainMenu = () => {
  const course = [
    {
      mainCourse: "dal",
      bread: 'Butter Nan',
      curry : 'Shev Bhaji',
      rice: 'Jeera Rice',
      sweet: 'Laadu',
    },
  ];

  return (
    <div className="mainCourse-container">
      <h2>Admin Menu </h2>
      <div >
        <button className="menu-btn">Add New Course</button> <br></br>
      <table className="table-responsive">
        <thead className="mainCourse-header">
        <th className="mainCourse-thead">Main Courses </th>
          <th className="mainCourse-thead">Bread </th>
          <th className="mainCourse-thead">Curry </th>
          <th className="mainCourse-thead">Rice </th>
          <th className="mainCourse-thead">Sweet </th>
        </thead>
        <tbody className="mainCourse-body">
          {course.map(s =>{
            return <tr>
              <td className="mainCourse-tbody">{s.mainCourse}</td>
              <td className="mainCourse-tbody">{s.bread}</td>
            <td className="mainCourse-tbody">{s.curry}</td>
            <td className="mainCourse-tbody">{s.rice}</td>
            <td className="mainCourse-tbody">{s.sweet}</td>
            <td>
              <input type="radio"></input>
            </td>
            </tr>
          })}
        </tbody>
      </table>
      </div> <br></br>
      <button className="todayMenu-btn">Add Today's Menu</button>
  </div>
  ) 
};

export default MainMenu;
