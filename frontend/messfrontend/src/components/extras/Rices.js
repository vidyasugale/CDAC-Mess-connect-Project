import './Rices.css';
import React, { useEffect, useState } from 'react';
import Button from '../header/Button';
import axiosConfig from '../../configs/axiosConfig';
import Navbar2 from '../header/Navbar2'
import Footer from '../footer/Footer'

const Rices = () => {
  const [riceList, setRiceList] = useState([]);
  const [riceName, setRiceName] = useState('');

  useEffect(() => {
    const getAllRices = async () => {
      try {
        const response = await axiosConfig.get("/rice/getallrices");
        setRiceList(response.data);
      } catch (error) {
        console.log(error)
      }
    }
    getAllRices();
  }, []);

  const addNewRice = async (e) => {

    try {
      const response = await axiosConfig.post("/rice/addrice", {
        name: riceName
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
          <img src="../assets/rice.png" className="rice-Img" />

        </div>
        <div className="col-lg-7 col-md-6 col-12 justify-content-end">
          <div className="rice-component">
            <div style={{ textAlign: "center", marginTop: "10px", height: "100px" }}>
              <div className="mt-1" style={{ position: "relative" }}>
                <div className="largeFont zIndBack headingLarge">
                  Rices
                </div>
                <div className="smallFont zIndFront headingSmall">
                  Rices
                </div>
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
                  <Button classname="btn btn-md ps-3 pe-3 mt-1 me-5 customBtn text-light" btnText="Create Rice" clickType="Submit" onClick={addNewRice} />
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
                    {riceList && riceList.map(data => (
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

export default Rices;
