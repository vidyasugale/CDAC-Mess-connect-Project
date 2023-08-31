import React, { useState, useEffect } from "react";
import axiosConfig from "../../configs/axiosConfig";
import Button from "../header/Button";
import "./SearchUser.css";
import AdminFooter from '../footer/AdminFooter'
import AdminNavbar from '../header/AdminNavbar'

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
    await axiosConfig.delete(`/user/deleteuser/${id}`)
    .then(response => {
      console.log(response);
      handleSearch();
    }).catch(error => console.log(error));

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
    <AdminNavbar homePath="/admin/home"/> 
      <div className="searchUser-container">
      <div style={{ textAlign: "center", marginTop: "10px", height: "100px" }}>
          <div className="mt-1" style={{ position: "relative" }}>
            <div className="largeFont zIndBack headingLarge">
              User Data
            </div>
            <div className="smallFont zIndFront headingSmall">
              User Data
            </div>
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
              <th className="col-2 flex-wrap">Email</th>
              <th className="col-2">Contact No</th>
              <th className="col-2">Balance</th>
              <th className="col-2">Actions</th>
            </tr>
          </thead>
          <tbody className="mt-1 mainCourse-header">
            
              <tr className="d-flex">
                <td className="col-2">{searchedData.firstName}</td>
                <td className="col-2">{searchedData.lastName}</td>
                <td className="col-2 td-resp">{searchedData.email}</td>
                <td className="col-2">{searchedData.phone}</td>
                <td className="col-2">
                {editingBalance === searchedData.id ? (
                        <input 
                          type="text" className="sm"
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
                
                {editingBalance === searchedData.id ? (
                        <button
                          className="ms-1 btn btn-primary btn-sm"
                          onClick={() => handleBalanceSave(searchedData.id, searchedData.balance)}>
                          Save
                        </button>  
                      ): (
                        <button
                          className="ms-1 btn btn-warning btn-sm"
                          onClick={() => handleEditBalance(searchedData.id)}
                        >
                          Edit
                        </button>
                      )} 
                      </td>
                <td className="col-2">
                      <button
                        clickType="Submit"
                        className="btn mx-2 btn-danger btn-sm"
                        onClick={() => handleDelete(searchedData.id)}
                      >
                        Delete User
                      </button>
                </td>
              </tr>
            
          </tbody>
        </table>
        </div>
      </div>
      < AdminFooter />
    </>
  );
};

export default SearchUser;
