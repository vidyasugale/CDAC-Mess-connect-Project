import './Breads.css';
import React, { useState } from 'react';


const Breads = () => {
  const [breadList, setBreadList] = useState([]);
  const [breadName, setBreadName] = useState('');

  const handleAddBread = () => {
    if (breadName.trim() !== '') {
      setBreadList([...breadList, breadName]);
      setBreadName('');
    }
  };

  return (
    <div className="bread-component">
      
        <h2 className="breadHeader">Breads</h2>
      
      <div >
        <form className="bread-form">
          <label>
            Bread Name:
            <input
              type="text"
              value={breadName}
              onChange={(e) => setBreadName(e.target.value)}
            />
          </label>
          <button type="button" onClick={handleAddBread}>
            Add to List
          </button>
        </form>
        <table className="bread-table">
          <thead>
            <tr>
              <th className="bread-tableHead">Bread Name</th>
            </tr>
          </thead>
          <tbody>
            {breadList.map((bread, index) => (
              <tr key={index}>
                <td className="rice-table">{bread}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Breads;
