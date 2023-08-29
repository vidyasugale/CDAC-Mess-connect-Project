import React, { useState } from 'react'

const AddOnCard = ({addOn,  onSelect, setSelectedAddOns}) => {
    const [selectedAddons, setSelectedAddons] = useState([]);


    const handleAddonChange = (event) => {
      const addonId = event.target.value;
      const isChecked = event.target.checked;
    
      setSelectedAddons((prevSelectedAddons) => {
        if (isChecked) {
          return [...prevSelectedAddons, addonId];
        } else {
          return prevSelectedAddons.filter((id) => id !== addonId);
        }
      });
      console.log(selectedAddons);
      console.log(addonId);
      
      onSelect(selectedAddons.concat(addonId)); // Pass the updated selected addons array
    };

  return (
    <>
      <div className="card mb-3" >
                <div className="row g-0">
                    
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                        <div className="card-body">
                            <h5 className="card-title">{}</h5>
                            <p className="card-text">
                                Name:{addOn.name}<br/>
                                Price:{addOn.price}
                            </p>

                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6 d-flex justify-content-center align-items-center">

                        <label>
                            Add addOn {addOn.id} <input type="checkbox" onChange={handleAddonChange} value={addOn.id}  />
                        </label>



                    </div>
                </div>
            </div>
    </>
  )
}

export default AddOnCard
