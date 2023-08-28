import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([
    {
      id: 1,
      name: 'John Doe',
      contact: '123-456-7890',
      address: '123 Main St, City',
      email: 'john@example.com',
      balance: '$100'
    },
    // Add more data entries here
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
    <div className="App">
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by email"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
            {searchedData && (
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Contact No</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Balance</th>
                    <th>Edit Balance</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{searchedData.name}</td>
                    <td>{searchedData.contact}</td>
                    <td>{searchedData.address}</td>
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
        </div>
      </div>
    </div>
  );
}

export default App;
