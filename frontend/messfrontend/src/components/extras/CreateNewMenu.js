import "./CreateNewMenu.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../header/Button";
import axiosConfig from "../../configs/axiosConfig";
import AdminFooter from '../footer/AdminFooter'
import AdminNavbar from '../header/AdminNavbar'
const CreateNewMenu = () => {

  const [mainCourseArray, setMainCourseArray] = useState([]);
  const [breadArray, setBreadArray] = useState([]);
  const [curryArray, setCurryArray] = useState([]);
  const [riceArray, setRiceArray] = useState([]);
  const [sweetArray, setSweetArray] = useState([]);
  const [mainCourse, setMainCourse] = useState("");
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

  const [invalidMenuName, setInvalidMenuName] = useState(false);
  const [invalidMenuBread, setInvalidMenuBread] = useState(false);
  const [invalidMenuCurry, setInvalidMenuCurry] = useState(false);
  const [invalidMenuRice, setInvalidMenuRice] = useState(false);
  const [invalidMenuSweet, setInvalidMenuSweet] = useState(false);
  const [invalidMenuMainCourse, setInvalidMenuMainCourse] = useState(false);
  const navigate = useNavigate();

  const validateMenuName = (e) => {
    if (e !== "") {
      setInvalidMenuName(false);
      setMainMenuName(e)
    }
    else {
      setInvalidMenuName(true);
    }
  }

  const validateMenuBread = (e) => {
    if (e !== "") {
      setInvalidMenuBread(false);
      setBread(e)
    }
    else {
      setInvalidMenuBread(true);
    }
  }
  const validateMenuCurry = (e) => {
    if (e !== "") {
      setInvalidMenuCurry(false);
      setCurry(e)
    }
    else {
      setInvalidMenuCurry(true);
    }
  }

  const validateMenuRice = (e) => {
    if (e !== "") {
      setInvalidMenuRice(false);
      setRice(e)
    }
    else {
      setInvalidMenuRice(true);
    }
  }

  const validateMenuSweet = (e) => {
    if (e !== "") {
      setInvalidMenuSweet(false);
      setSweet(e)
    }
    else {
      setInvalidMenuSweet(true);
    }
  }

  const validateMenuMainCourse = (e) => {
    if (e !== "") {
      setInvalidMenuMainCourse(false);
      setMainCourse(e)
    }
    else {
      setInvalidMenuMainCourse(true);
    }
  }


  const sweetObj = sweetArray.find(obj => obj.id == sweet);
  const curryObj = curryArray.find(obj => obj.id == curry);
  const riceObj = riceArray.find(obj => obj.id == rice);
  const mainCourseObj = mainCourseArray.find(obj => obj.id == mainCourse);
  const breadObj = breadArray.find(obj => obj.id == bread);

  const submitMenu = async (event) => {
    event.preventDefault();
    if (invalidMenuName || invalidMenuMainCourse || invalidMenuCurry || invalidMenuBread || invalidMenuRice || invalidMenuSweet) {
      alert("invalid data filled!!!");
      // window.location.reload();
    } else

      await axiosConfig.post("/admin/addnewmenu", {
        name: mainMenuName,
        price: price,
        sweet: sweetObj,
        rice: riceObj,
        curry: curryObj,
        bread: breadObj,
        mainCourse: mainCourseObj
      }).then(response => {
        console.log(response.data);
        navigate("/select-main-menu");
      }).catch(error => {
        alert("provide valid details!!!");
      })
  };
  return (
    <>
    <AdminNavbar homePath="/admin/home"/> 
      <div className="addNewMenu-component">
        <div style={{ textAlign: "center", marginTop: "10px", height: "100px" }}>
          <div className="mt-1" style={{ position: "relative" }}>
            <div className="largeFont zIndBack headingLarge">
              Create New Menu
            </div>
            <div className="smallFont zIndFront headingSmall">
              Create New Menu
            </div>
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
                onChange={(e) =>
                  validateMenuName(e.target.value)
                }
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
                onChange={(e) =>
                  validateMenuMainCourse(e.target.value)
                }
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
                onChange={(e) =>
                  validateMenuBread(e.target.value)
                }
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
                onChange={(e) =>
                  validateMenuCurry(e.target.value)
                }
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
                onChange={(e) =>
                  validateMenuRice(e.target.value)
                }
                required={true}
                id="rice"
                className="form-select"
              >
                <option selected disabled value="">
                  --Select Rice--
                </option>
                {riceArray &&
                  riceArray.map((item) => (
                    <option key={item.id} value={item.id}> {item.name} </option>
                  ))}
              </select>
            </div>
            <div className="mb3">
              <label htmlFor="sweet" className="mt-3 form-label">
                Sweet :
              </label>
              <select
                name="sweet"
                onChange={(e) =>
                  validateMenuSweet(e.target.value)
                }
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
                onChange={(e) =>
                  setPrice(e.target.value)
                }
                type="number"
                required={true}
                id="price"
                className="form-control"
              ></input>
            </div>
            <div>

              <Button
                classname="btn btn-md mt-3  col-md-3 customBtn text-light"
                btnText="Create Menu"
                clickType="Submit"
                onClick={submitMenu}
              />


              <Link to="/select-main-menu">
                <Button
                  classname="btn btn-md mt-3 mx-2 col-md-3  backBtn customBtn text-light"
                  btnText="Back"
                  clickType="Submit"
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
      < AdminFooter />
    </>
  );
};

export default CreateNewMenu;
