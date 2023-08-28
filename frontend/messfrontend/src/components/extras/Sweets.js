import './Sweets.css';
import React, { useEffect, useState } from 'react';
import Button from '../header/Button';
import axiosConfig from '../../configs/axiosConfig';
import Navbar2 from '../header/Navbar2'
import Footer from '../footer/Footer'

const Sweets = () => {
  const [sweetList, setSweetList] = useState([]);
  const [sweetName, setSweetName] = useState('');

  useEffect(() => {
    const getAllSweets = async () => {
      try {
        const response = await axiosConfig.get("/sweet/getallsweets");
        console.log(typeof response.data);
        setSweetList(response.data);
      } catch (error) {
        console.log(error)
      }
    }
    getAllSweets();
  },[]);

  const addNewSweet = async (e) => {
    
      try {
        const response = await axiosConfig.post("/sweet/addsweet",{
          name:sweetName
        });
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
  }

  return (
    <>
    < Navbar2 />
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
          <Button classname="btn btn-md ps-3 pe-3 mt-1 me-5 customBtn text-light" btnText="Create Sweet" clickType="Submit" onClick={addNewSweet} />
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
            {sweetList && sweetList.map(data => (
              <tr key={data.id}>
                <td >{data.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
      </div>
       </div>
       < Footer />
       </>
  );
}

export default Sweets;
