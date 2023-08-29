import './Curries.css';
import React, { useEffect, useState } from 'react';
import Button from '../header/Button';
import axiosConfig from '../../configs/axiosConfig';
import Navbar2 from '../header/Navbar2'
import Footer from '../footer/Footer'

const Curries =() => {
  const [curryList, setCurryList] = useState([]);
  const [curryName, setCurryName] = useState('');
  
  useEffect(() => {
    const getAllCurries = async () => {
      try {
        const response = await axiosConfig.get("/curry/getallcuries");
        setCurryList(response.data);
      } catch (error) {
        console.log(error)
      }
    }
    getAllCurries();
  },[]);

  const addNewCurry = async (e) => {
    
      try {
        const response = await axiosConfig.post("/curry/addcurry",{
          name:curryName 
        });
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
  }

   return (
    <>
    < Navbar2 homePath="/admin/home" />
    <div className="mt-3 d-flex align-items-center flex-wrap">
      <div className=" col-lg-5 col-md-5 col-12">
      <img src="../assets/curry.png" className="curry-Img" />

      </div>
      <div className="col-lg-7 col-md-6 col-12 justify-content-end">
      <div className="curry-component">
      <div className="" style={{ position: "relative", height: "5rem" }}>
          <div className="largeFont zIndBack registerHeadOut" style={{ left: "20%" }}>
            Curries
          </div>
          <div className="smallFont zIndFront registerHeadIn" style={{}}>
            Curries
          </div>
        </div>
      <div >
        <form >
          <label className="form-label">
            Curry Name :
            <input
              type="text"
              value={curryName} className="form-control" required={true}
              onChange={(event) => setCurryName(event.target.value)}
            />
          </label>
          <div>
          <Button classname="btn btn-md ps-3 pe-3 mt-1 me-5 customBtn text-light" btnText="Create Curry" clickType="Submit" onClick={addNewCurry} />
          </div>
        </form>
        <div >
        <table className="table table-head" >
          <thead  >
            <tr>
              <th >Curries</th>
            </tr>
          </thead>
          <tbody>
            {curryList && curryList.map(data => (
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

export default Curries;
