import "./Addons.css";
import { useState } from "react";

const Addons = () => {
  const [addonsList, setAddonsList] = useState([]);
  const [addonName, setAddonName] = useState("");
  const [addonPrice, setAddonPrice] = useState("");

  const handleAddons = () =>{
    const newAddons={addonName, addonPrice};
    setAddonsList([...addonsList, newAddons]);
    setAddonName('');
    setAddonPrice('');

    console.log("Name :", addonName);
    console.log("Price :", addonPrice);
  }

  return (
    <div className="addon-component">
      
        <h2 className="addon-header">Add Ons</h2>
      
      <div >
        <form className="addon-form">
          <label>
            AddOn Name
            <input
              type="text"
              value={addonName}
              onChange={(event) => setAddonName(event.target.value)}
            />
          </label> <br></br>
          <label>
            AddOn Price
            <input
              type="number"
              value={addonPrice}
              onChange={(event) => setAddonPrice(event.target.value)}
            />
          </label>
          <button type="button" onClick={handleAddons}>
            Add to List
          </button>
        </form>
        </div>
      </div>

  )
};

export default Addons;
