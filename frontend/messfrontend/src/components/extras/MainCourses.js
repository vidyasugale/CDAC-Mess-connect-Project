import './MainCourses.css';
import React, { useEffect, useState } from 'react';
import Button from '../header/Button';
import axiosConfig from '../../configs/axiosConfig';
import Navbar2 from '../header/Navbar2'
import Footer from '../footer/Footer'

const MainCourses = () => {
  const [mainCourseList, setMainCourseList] = useState([]);
  const [mainCourseName, setMainCourseName] = useState('');

  useEffect(() => {
    const getAllMainCourses = async () => {
      try {
        const response = await axiosConfig.get("/maincourse/getallmaincourses");
        console.log(typeof response.data);
        setMainCourseList(response.data);
      } catch (error) {
        console.log(error)
      }
    }
    getAllMainCourses();
  }, []);

  const addNewMainCourse = async (e) => {

    try {
      const response = await axiosConfig.post("/maincourse/addmaincourse", {
        name: mainCourseName
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
          <img src="../assets/main_course.png" className="mainCourse-Img" />

        </div>
        <div className="col-lg-7 col-md-6 col-12 justify-content-end">
          <div className="mainCourse-component">
            <div style={{ textAlign: "center", marginTop: "10px", height: "100px" }}>
              <div className="mt-1" style={{ position: "relative" }}>
                <div className="largeFont zIndBack headingLarge">
                  Main Courses
                </div>
                <div className="smallFont zIndFront headingSmall">
                  Main Courses
                </div>
              </div>
            </div>
            <div >
              <form >
                <label className="form-label">
                  MainCourse Name :
                  <input
                    type="text"
                    value={mainCourseName} className="form-control" required={true}
                    onChange={(event) => setMainCourseName(event.target.value)}
                  />
                </label>
                <div>
                  <Button classname="btn btn-md ps-3 pe-3 mt-1 me-5 customBtn text-light" btnText="Create Main Course " clickType="Submit" onClick={addNewMainCourse} />
                </div>
              </form>
              <div >
                <table className="table table-head" >
                  <thead  >
                    <tr>
                      <th > Main Courses </th>
                    </tr>
                  </thead>
                </table>
                <table className="table table-head">
                  <tbody>
                    {mainCourseList && mainCourseList.map(data => (
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

export default MainCourses;
