import './Sweets.css';
import React, { useState } from 'react';
import Button from '../header/Button';

const Sweets = () => {
  const [sweetList, setSweetList] = useState([]);
  const [sweetName, setSweetName] = useState('');

  const handleAddSweet = () => {
    if (sweetName.trim() !== '') {
      setSweetList([...sweetList, sweetName]);
      setSweetName('');
    }
  };

  return (
    <div className="mt-3 d-flex align-items-center flex-wrap">
    <div className=" col-lg-5 col-md-5 col-12">
    <img src="../assets/sweet.png" className="sweet-Img" />

    </div>
    <div className="col-lg-7 col-md-6 col-12 justify-content-end">
    <div className="sweet-component">
    <div className="" style={{ position: "relative", height: "5rem" }}>
        <div className="largeFont zIndBack registerHeadOut" style={{ left: "20%" }}>
          Sweets
        </div>
        <div className="smallFont zIndFront registerHeadIn" style={{}}>
          Sweets
        </div>
      </div>
      <div >
        <form >
          <label className="sweet-form">
            Sweet Name :
            <input
              type="text"
              value={sweetName} className="form-control" required={true}
              onChange={(event) => setSweetName(event.target.value)}
            />
          </label>
          <div>
          <Button classname="btn btn-md ps-3 pe-3 mt-1 me-5 customBtn text-light" btnText="Create Sweet" clickType="Button" onClick={handleAddSweet} />
          </div>
        </form>
        <div >
        <table className="table table-head" >
          <thead  >
            <tr>
              <th >Sweets</th>
            </tr>
          </thead>
          <tbody>
            {sweetList.map((sweet, index) => (
              <tr key={index}>
                <td >{sweet}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
      </div>
       </div>
  );
}

export default Sweets;
