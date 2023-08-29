import "./CreateNewMenu.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../header/Button";
import Navbar2 from "../header/Navbar2";
import Footer from "../footer/Footer";
import axiosConfig from "../../configs/axiosConfig";

const CreateNewMenu = () => {
  const [mainCourseArray, setMainCourseArray] = useState([]);
  const [breadArray, setBreadArray] = useState([]);
  const [curryArray, setCurryArray] = useState([]);
  const [riceArray, setRiceArray] = useState([]);
  const [sweetArray, setSweetArray] = useState([]);
  const [mainCourse, setmainCourse] = useState("");
  const [mainMenuName, setMainMenuName] = useState("");
  const [bread, setBread] = useState("");
  const [curry, setCurry] = useState("");
  const [rice, setRice] = useState("");
  const [sweet, setSweet] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const getAllIteams = async () => {
      try {
        const response = await axiosConfig.get("/admin/getallitems");
        setMainCourseArray(response.data.mainCourses);
        setBreadArray(response.data.breads);
        setCurryArray(response.data.curries);
        setRiceArray(response.data.rices);
        setSweetArray(response.data.sweets);
      } catch (error) {
        console.log(error);
      }
    };
    getAllIteams();
  }, []);

  const createNewMenu = async (e) => {
    const sweetObj = sweetArray.find(obj => obj.id == sweet);
    const curryObj = curryArray.find(obj => obj.id == curry);
    const riceObj = riceArray.find(obj => obj.id == rice);
    const mainCourseObj = mainCourseArray.find(obj => obj.id == mainCourse);
    const breadObj = breadArray.find(obj => obj.id == bread);
    
    try {
      const response = await axiosConfig.post("/admin/addnewmenu", {
        name: mainMenuName,
        price: price,
        sweet: sweetObj,
        rice: riceObj,
        curry: curryObj,
        bread: breadObj ,
        mainCourse: mainCourseObj
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar2 homePath="/admin/home" />
      <div className="addNewMenu-component">
        <div className="" style={{ position: "relative", height: "5rem" }}>
          <div
            className="largeFont zIndBack registerHeadOut"
            style={{ left: "20%" }}
          >
            Create New Menu
          </div>
          <div className="smallFont zIndFront registerHeadIn" style={{}}>
            Create New Menu
          </div>
        </div>
        <div className="container mt-3  " style={{ width: "60%" }}>
          <form>
            <div className="mb3">
              <label htmlFor="name" className="mt-3 form-label">
                Name :
              </label>
              <input
                required={true}
                placeholder="Add Name for New Menu"
                onChange={(event) => {
                  setMainMenuName(event.target.value);
                }}
                type="text"
                id="name"
                className="form-control"
              ></input>
            </div>
            <div lassName="mb3">
              <label htmlFor="mainCourse" className="mt-3 form-label">
                Main Course :
              </label>
              <select
                name="mainCourse"
                onChange={(event) => {
                  setmainCourse(event.target.value);
                }}
                required={true}
                id="mainCourse"
                className="form-select"
              >
                <option selected disabled value="">
                  --Select Main Course--
                </option>
                {mainCourseArray &&
                  mainCourseArray.map((item) => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                  ))}
              </select>
            </div>
            <div className="mb3">
              <label htmlFor="bread" className="mt-3 form-label">
                Bread :
              </label>
              <select
                name="bread"
                onChange={(event) => {
                  setBread(event.target.value);
                }}
                required={true}
                id="bread"
                className="form-select"
              >
                <option selected disabled value="">
                  --Select Bread--
                </option>
                {breadArray &&
                  breadArray.map((item) => (
                    <option key={item.id} value={item.id}> {item.name} </option>
                  ))}
              </select>
            </div>

            <div className="mb3">
              <label htmlFor="curry" className="mt-3 form-label">
                Curry :
              </label>
              <select
                name="curry"
                onChange={(event) => {
                  setCurry(event.target.value);
                }}
                required={true}
                id="curry"
                className="form-select"
              >
                <option selected disabled value="">
                  --Select Curry--
                </option>
                {curryArray &&
                  curryArray.map((item) => (
                    <option key={item.id} value={item.id}> {item.name} </option>
                  ))}
              </select>
            </div>
            <div className="mb3">
              <label htmlFor="rice" className="mt-3 form-label">
                Rice :
              </label>
              <select
                name="rice"
                onChange={(event) => {
                  setRice(event.target.value);
                }}
                required={true}
                id="rice"
                className="form-select"
              >
                <option selected disabled value="">
                  --Select Rice--
                </option>
                {riceArray &&
                  riceArray.map((item) => (
                    <option key={item.id}value={item.id}> {item.name} </option>
                  ))}
              </select>
            </div>
            <div className="mb3">
              <label htmlFor="sweet" className="mt-3 form-label">
                Sweet :
              </label>
              <select
                name="sweet"
                onChange={(event) => {
                  setSweet(event.target.value);
                }}
                required={true}
                id="sweet"
                className="form-select"
              >
                <option selected disabled value="">
                  --Select Sweet--
                </option>
                {sweetArray &&
                  sweetArray.map((item) => (
                    <option key={item.id} value={item.id}> {item.name} </option>
                  ))}
              </select>
            </div>
            <div className="mb3">
              <label htmlFor="price" className="mt-3 form-label">
                Price :
              </label>
              <input
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
                type="number"
                required={true}
                id="price"
                className="form-control"
              ></input>
            </div>
            <div>
              <Link to="/select-main-menu">
              <Button
                classname="btn btn-md mt-3  col-md-3 customBtn text-light"
                btnText="Create Menu"
                clickType="button"
                onClick={createNewMenu}
              />
              </Link>
              
              <Link to="/select-main-menu">
                <Button
                  classname="btn btn-md mt-3 mx-2 col-md-3  backBtn customBtn text-light"
                  btnText="Back"
                  clickType="button"
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateNewMenu;
