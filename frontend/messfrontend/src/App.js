import axiosConfig from "./configs/axiosConfig";
import { useEffect, useState } from "react";
import "./App.css";
import MainHomepg from "./components/body/MainHomepg";
import AppContext from "./configs/AppContext";
 function App() {
  const [menuDetails, setMenuDetails] = useState(null);

  useEffect(() => {

      const myfunc = async () => {
          try {
              const response = await axiosConfig.get("/home");
              console.log(response);
              setMenuDetails(response.data);
            } catch (error) {
              console.log(error);
            }
      }
      myfunc();
  },[]);
  return (
    <div className="App">
      <AppContext.Provider value={menuDetails}>
      <MainHomepg />
      </AppContext.Provider>
      
    </div>
  );
}

export default App;
