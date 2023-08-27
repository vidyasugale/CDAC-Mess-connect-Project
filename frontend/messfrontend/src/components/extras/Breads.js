import './Breads.css';
import React, { useEffect, useState } from 'react';
import Button from '../header/Button';
import axiosConfig from '../../configs/axiosConfig';

const Breads = () => {
  const [breadList, setBreadList] = useState(null);
  const [breadName, setBreadName] = useState('');

  // const handleAddBread = (e) => {
  //   if (breadName.trim() !== '') {
  //     setBreadList([...breadList, breadName]);
  //     setBreadName('');
  //   }
  // };



  useEffect(() => {
    const getAllBreads = async () => {
      try {
        const response = await axiosConfig.get("/bread/getallbreads");
        console.log(typeof response.data);
        setBreadList(response.data);
      } catch (error) {
        console.log(error)
      }
    }
    getAllBreads();
  },[]);

  const addNewBread = async (e) => {
    
      try {
        const response = await axiosConfig.post("/bread/addbread",{
          name:breadName
        });
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
  }

  return (
    <div className="mt-3 d-flex align-items-center flex-wrap">
      <div className=" col-lg-5 col-md-5 col-12">
      <img src="../assets/bread.png" className="bread-Img" />

      </div>
      <div className="col-lg-7 col-md-6 col-12 justify-content-end">
      <div className="bread-component">
      <div className="" style={{ position: "relative", height: "5rem" }}>
          <div className="largeFont zIndBack registerHeadOut" style={{ left: "20%" }}>
            Breads
          </div>
          <div className="smallFont zIndFront registerHeadIn" style={{}}>
            Breads
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
          <Button classname="btn btn-md ps-3 pe-3 mt-1 me-5 customBtn text-light" btnText="Create Bread" clickType="Button" onClick={addNewBread} />
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
    
  );
}

export default Breads;
