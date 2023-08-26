import './MainCourses.css';
import React, { useState } from 'react';


const MainCourses = () => {
  const [mainCourseList, setMainCourseList] = useState([]);
  const [mainCourseName, setMainCourseName] = useState('');

  const handleAddMainCourse = () => {
    if (mainCourseName.trim() !== '') {
      setMainCourseList([...mainCourseList, mainCourseName]);
      setMainCourseName('');
    }
  };

  return (
    <div className="mainCourse-component">
      
        <h2 className="mainCourseHeader">MainCourses</h2>
      
      <div >
        <form className="mainCourse-form">
          <label>
            MainCourse Name:
            <input
              type="text"
              value={mainCourseName}
              onChange={(e) => setMainCourseName(e.target.value)}
            />
          </label>
          <button type="button" onClick={handleAddMainCourse}>
            Add to List
          </button>
        </form>
        <table className="mainCourse-table">
          <thead>
            <tr>
              <th className="mainCourse-tableHead">MainCourse Name</th>
            </tr>
          </thead>
          <tbody>
            {mainCourseList.map((mainCourse, index) => (
              <tr key={index}>
                <td className="rice-table">{mainCourse}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MainCourses;
