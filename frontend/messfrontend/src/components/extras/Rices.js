import './Rices.css';
import React, { useState } from 'react';


function Rices() {
  const [riceList, setRiceList] = useState([]);
  const [riceName, setRiceName] = useState('');

  const handleAddRice = () => {
    if (riceName.trim() !== '') {
      setRiceList([...riceList, riceName]);
      setRiceName('');
    }
  };

  return (
    <div className="rice-component">
      
        <h2 className="riceHeader">Rices</h2>
      
      <div >
        <form className="rice-form">
          <label>
            Rice Name:
            <input
              type="text"
              value={riceName}
              onChange={(e) => setRiceName(e.target.value)}
            />
          </label>
          <button type="button" onClick={handleAddRice}>
            Add to List
          </button>
        </form>
        <table className="rice-table">
          <thead>
            <tr>
              <th className="rice-tableHead">Rice Name</th>
            </tr>
          </thead>
          <tbody>
            {riceList.map((rice, index) => (
              <tr key={index}>
                <td className="rice-table">{rice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Rices;
