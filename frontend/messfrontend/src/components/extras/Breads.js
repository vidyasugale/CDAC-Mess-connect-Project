import './Breads.css';
import React, { useEffect, useState } from 'react';
import Button from '../header/Button';
import axiosConfig from '../../configs/axiosConfig';
import AdminFooter from '../footer/AdminFooter'
import AdminNavbar from '../header/AdminNavbar'

const Breads = () => {
  const [breadList, setBreadList] = useState(null);
  const [breadName, setBreadName] = useState('');

  useEffect(() => {
    const getAllBreads = async () => {
      try {
        const response = await axiosConfig.get("/bread/getallbreads");
        setBreadList(response.data);
      } catch (error) {
        console.log(error)
      }
    }
    getAllBreads();
  }, []);

  const addNewBread = async (e) => {

    try {
      const response = await axiosConfig.post("/bread/addbread", {
        name: breadName
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <AdminNavbar homePath="/admin/home"/> 
    <div className="mt-3 d-flex align-items-center flex-wrap">
      <div className=" col-lg-5 col-md-5 col-12">
      <img src="../assets/bread.png" className="bread-Img" />


        </div>
        <div className="col-lg-7 col-md-6 col-12 justify-content-end">
          <div className="bread-component">
            <div style={{ textAlign: "center", marginTop: "10px", height: "100px" }}>
              <div className="mt-1" style={{ position: "relative" }}>
                <div className="largeFont zIndBack headingLarge">
                  Breads
                </div>
                <div className="smallFont zIndFront headingSmall">
                  Breads
                </div>
              </div>
            </div>
            <div >
              <form >
                <label className="form-label">
                  Bread Name :
                  <input
                    type="text"
                    value={breadName} className="form-control" required={true}
                    onChange={(event) => setBreadName(event.target.value)}
                  />
                </label>
                <div>
                  <Button classname="btn btn-md ps-3 pe-3 mt-1 me-5 customBtn text-light" btnText="Create Bread" clickType="Submit" onClick={addNewBread} />
                </div>
              </form>
              <div >
                <table className="table table-head" >
                  <thead  >
                    <tr>
                      <th >Breads</th>
                    </tr>
                  </thead>
                  <tbody>
                    {breadList && breadList.map(data => (
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
       </div>
      < AdminFooter />
       </>
  );
}

export default Breads;
