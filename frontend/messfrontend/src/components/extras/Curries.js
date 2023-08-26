import './Curries.css';
import React, { useState } from 'react';


const Curries =() => {
  const [curryList, setCurryList] = useState([]);
  const [curryName, setCurryName] = useState('');

  const handleAddCurry = () => {
    if (curryName.trim() !== '') {
      setCurryList([...curryList, curryName]);
      setCurryName('');
    }
  };

  return (
    <div className="curry-component">
      
        <h2 className="curryHeader">Curries</h2>
      
      <div >
        <form className="curry-form">
          <label>
            Curry Name:
            <input
              type="text"
              value={curryName}
              onChange={(event) => setCurryName(event.target.value)}
            />
          </label>
          <button type="button" onClick={handleAddCurry}>
            Add to List
          </button>
        </form>
        <table className="curry-table">
          <thead>
            <tr>
              <th className="curry-tableHead">Curry Name</th>
            </tr>
          </thead>
          <tbody>
            {curryList.map((curry, index) => (
              <tr key={index}>
                <td className="curry-table">{curry}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Curries;
