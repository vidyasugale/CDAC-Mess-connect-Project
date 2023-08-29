import React, { useState, useEffect } from "react";
import axiosConfig from "../../configs/axiosConfig";
import Navbar2 from "../header/Navbar2";
import Footer from "../footer/Footer";
import Button from "../header/Button";
import "./SearchUser.css";

const SearchUser = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [searchedData, setSearchedData] = useState("");
  const [editingBalance, setEditingBalance] = useState("");


  const handleSearch = async () => {

    try{
      console.log(searchTerm)
   const response= await axiosConfig.get(`/admin/getuserdata/${searchTerm}`);
         setSearchedData(response.data);
        
      }catch(error) {
        console.error(error);
      };
  };

  const handleDelete = async (id) => {
    try{
    const response= await axiosConfig.delete(`/user/deleteuser/${id}`);
  }catch(error) {
        console.log(error);
      };
  };
  const handleEditBalance = (id) => {
    setEditingBalance(id);
    
  };

  const handleBalanceSave = async  (id, newBalance) => {
       await axiosConfig.put("/admin/updatebalance",{
        userId: id,
        updatedBal: newBalance
    } ).then(response=> {setEditingBalance(0)} ).catch(error => console.log(error))
  };

  return (
    <>
      <Navbar2 homePath="/admin/home" />
      <div className="searchUser-container">
        <div className="" style={{ position: "relative", height: "5rem" }}>
          <div
            className="largeFont zIndBack registerHeadOut"
            style={{ left: "20%" }}
          >
            User Data
          </div>
          <div className="smallFont zIndFront registerHeadIn" style={{}}>
            User Data
          </div>
        </div>

        <div>
          <input required={true} type="text" className="form-control" placeholder="Search by Email" value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}/>

          <Button classname="btn btn-md mt-1 customBtn text-light" btnText="Search" onClick={handleSearch} clickType="button"/>
        </div>
        <div className="table-container">
        <table className="table mt-3 table-responsive searchUser-header">
          <thead className="searchUser-header">
            <tr className="d-flex">
              <th className="col-2">First Name</th>
              <th className="col-2">Last Name</th>
              <th className="col-2">Email</th>
              <th className="col-2">Contact No</th>
              <th className="col-2">Balance</th>
              <th className="col-2">Actions</th>
            </tr>
          </thead>
          <tbody className="mt-1 mainCourse-header">
            
              <tr className="d-flex">
                <td className="col-2">{searchedData.firstName}</td>
                <td className="col-2">{searchedData.lastName}</td>
                <td className="col-2">{searchedData.email}</td>
                <td className="col-2">{searchedData.phone}</td>
                <td className="col-2">
                {editingBalance === searchedData.id ? (
                        <input 
                          type="text"
                          value={searchedData.balance}
                          onChange={(e) =>
                            setSearchedData({
                              ...searchedData,
                              balance: e.target.value
                            })
                          }
                          onBlur={() =>
                            handleBalanceSave(
                              searchedData.id,
                              searchedData.balance
                            )
                          }
                        />
                      )  : (
                        searchedData.balance
                      )}
                </td>
                <td className="col-2">
                {editingBalance === searchedData.id ? (
                        <button
                           clickType="Submit"
                          className="btn btn-primary btn-sm"
                          onClick={() => handleBalanceSave(searchedData.id, searchedData.balance)}>
                          Save
                        </button>  
                      ): (
                        <button
                          className="btn btn-warning btn-sm"
                          onClick={() => handleEditBalance(searchedData.id)}
                        >
                          Edit
                        </button>
                      )}
                      <button
                        className="btn mx-2 btn-danger btn-sm"
                        onClick={() => handleDelete(searchedData.id)}
                      >
                        Delete
                      </button>
                </td>
              </tr>
            
          </tbody>
        </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchUser;
