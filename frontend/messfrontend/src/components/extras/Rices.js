import './Rices.css';
import React, { useState } from 'react';
import Button from '../header/Button';

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
    <div className="mt-3 d-flex align-items-center flex-wrap">
    <div className=" col-lg-5 col-md-5 col-12">
    <img src="../assets/rice.png" className="rice-Img" />

    </div>
    <div className="col-lg-7 col-md-6 col-12 justify-content-end">
    <div className="rice-component">
    <div className="" style={{ position: "relative", height: "5rem" }}>
        <div className="largeFont zIndBack registerHeadOut" style={{ left: "20%" }}>
          Rices
        </div>
        <div className="smallFont zIndFront registerHeadIn" style={{}}>
          Rices
        </div>
      </div>
      <div >
        <form >
          <label className="form-label">
            Rice Name :
            <input
              type="text"
              value={riceName} className="form-control" required={true}
              onChange={(event) => setRiceName(event.target.value)}
            />
          </label>
          <div>
          <Button classname="btn btn-md ps-3 pe-3 mt-1 me-5 customBtn text-light" btnText="Create Rice" clickType="Button" onClick={handleAddRice} />
          </div>
        </form>
        <div >
        <table className="table table-head" >
          <thead  >
            <tr>
              <th >Rices</th>
            </tr>
          </thead>
          <tbody>
            {riceList.map((rice, index) => (
              <tr key={index}>
                <td >{rice}</td>
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

export default Rices;
