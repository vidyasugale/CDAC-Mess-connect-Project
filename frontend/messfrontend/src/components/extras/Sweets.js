import './Sweets.css';
import React, { useState } from 'react';


function Sweets() {
  const [sweetList, setSweetList] = useState([]);
  const [sweetName, setSweetName] = useState('');

  const handleAddSweet = () => {
    if (sweetName.trim() !== '') {
      setSweetList([...sweetList, sweetName]);
      setSweetName('');
    }
  };

  return (
    <div className="sweet-component">
      
        <h2 className="sweetHeader">Sweets</h2>
      
      <div >
        <form className="sweet-form">
          <label>
            Sweet Name:
            <input
              type="text"
              value={sweetName}
              onChange={(e) => setSweetName(e.target.value)}
            />
          </label>
          <button type="button" onClick={handleAddSweet}>
            Add to List
          </button>
        </form>
        <table className="sweet-table">
          <thead>
            <tr>
              <th className="sweet-tableHead">Sweet Name</th>
            </tr>
          </thead>
          <tbody>
            {sweetList.map((sweet, index) => (
              <tr key={index}>
                <td className="rice-table">{sweet}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Sweets;
