import React, { useEffect, useState } from "react";
import "./SelectMainMenu.css";
import Button from "../header/Button";
import { Link } from "react-router-dom";
import Navbar2 from "../header/Navbar2";
import Footer from "../footer/Footer";
import axiosConfig from "../../configs/axiosConfig";

const SelectMainMenu = () => {
  const [allMenu, setAllMenu] = useState([]);

  useEffect(() => {
    const getAllMenu = async () => {
      try {
        const response = await axiosConfig.get("/admin/getallmenu");
        console.log(typeof response.data);
        setAllMenu(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllMenu();
  }, []);

  return (
    <>
      <Navbar2 homePath="/admin/home" />
      <div className="mainCourse-container">
        <div style={{ textAlign: "center", marginTop: "10px", height: "100px" }}>
          <div className="mt-1" style={{ position: "relative" }}>
            <div className="largeFont zIndBack headingLarge">
              Select Main Menu
            </div>
            <div className="smallFont zIndFront headingSmall">
              Select Main Menu
            </div>
          </div>
        </div>
        <div className="mt-2">
          <Link to="/create-new-menu">
            <Button
              classname="btn btn-md customBtn text-light"
              btnText="Create New Menu"
              clickType="button"
            />
          </Link>
          <div className="table-container ">
            <table className="table mt-3 table-responsive table-striped ">
              <thead className="mainCourse-header">
                <th>Menu Name </th>
                <th>Main Courses </th>
                <th>Bread </th>
                <th>Curry </th>
                <th>Rice </th>
                <th>Sweet </th>
                <th>Price </th>
                <th>Select </th>
              </thead>
              <tbody className="mainCourse-body">
                {allMenu &&
                  allMenu.map((data) => {
                    return (
                      <tr key={data.id}>
                        <td>{data.name}</td>
                        <td>{data.mainCourse.name}</td>
                        <td>{data.bread.name}</td>
                        <td>{data.curry.name}</td>
                        <td>{data.rice.name}</td>
                        <td>{data.sweet.name}</td>
                        <td>{data.price}</td>

                        <td>
                          <input value={data.id} type="radio"></input>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>

        <Button
          classname="btn btn-md customBtn text-light"
          btnText="Add Today's Menu"
          clickType="button"
        />
        <Link to="/admin/home">
          <Button
            classname="btn btn-md mx-2 customBtn text-light"
            btnText="Admin Home"
            clickType="button"
          />
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default SelectMainMenu;
