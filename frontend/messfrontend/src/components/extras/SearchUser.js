import React, { useState } from 'react';
import "./SearchUser.css";
import Button from '../header/Button';
import Navbar2 from '../header/Navbar2';
import Footer from '../footer/Footer';

function SearchUser() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([
    {
      id: 1,
      fname: 'Chandan',
      lname:'Bile',
      contact: '9292939394',
      email: 'bile@gmail.com',
      balance: '100'
    },
  ]);
  const [searchedData, setSearchedData] = useState(null);
  const [editingBalance, setEditingBalance] = useState(null);

  const handleSearch = () => {
    const foundData = data.find(item =>
      item.email.toLowerCase() === searchTerm.toLowerCase()
    );

    if (foundData) {
      setSearchedData(foundData);
    } else {
      setSearchedData(null);
    }
  };

  const handleDelete = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
    setSearchedData(null);
  };

  const handleEditBalance = (id) => {
    setEditingBalance(id);
  };

  const handleBalanceSave = (id, newBalance) => {
    const updatedData = data.map(item =>
      item.id === id ? { ...item, balance: newBalance } : item
    );
    setData(updatedData);
    setEditingBalance(null);
  };

  return (
    <>
   < Navbar2 />
    <div className="search-container">
    <div className="" style={{ position: "relative", height: "5rem" }}>
          <div className="largeFont zIndBack registerHeadOut" style={{ left: "20%" }}>
            Users Data
          </div>
          <div className="smallFont zIndFront registerHeadIn" style={{}}>
            Users Data
          </div>
        </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by email"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="input-group-append">
      <Button classname="btn btn-md customBtn text-light" btnText="Search" clickType="button" onClick={handleSearch} /> 
              </div>
            </div>
            {searchedData && (
              <table className="table">
                <thead>
                  <tr>
                    <th>FirstName</th>
                    <th>Last Name</th>
                    <th>Contact No</th>
                    <th>Email</th>
                    <th>Balance</th>
                    <th>Edit Balance</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <td>{searchedData.fname}</td>
                    <td>{searchedData.lname}</td>
                    <td>{searchedData.contact}</td>
                    <td>{searchedData.email}</td>
                    <td>
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
                      ) : (
                        searchedData.balance
                      )}
                    </td>
                    <td>
                      {editingBalance === searchedData.id ? (
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => handleBalanceSave(searchedData.id, searchedData.balance)}
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          className="btn btn-warning btn-sm"
                          onClick={() => handleEditBalance(searchedData.id)}
                        >
                          Edit
                        </button>
                      )}
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(searchedData.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
          <Footer />
          </>
  );
}

export default SearchUser;
